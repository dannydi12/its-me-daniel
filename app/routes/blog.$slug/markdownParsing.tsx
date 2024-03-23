import { unified } from "unified";
// @ts-expect-error no-implicit-any -- this library does not have a type definition
import preview, { textFormatter } from "remark-preview";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import { readingTime } from "hast-util-reading-time";
import { read } from "to-vfile";
import { getFolderPath, getMarkdownFilePath } from "./getMarkdownFilePath";

import fs from "fs";

const inferReadingTime = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- can't find the types for these 🤷‍♂️
  return (tree: any, file: any) => {
    file.data.frontmatter.readTime = readingTime(tree, { age: 16 });
  };
};

export const parseMarkdown = async (slug: string) => {
  const filePath = getMarkdownFilePath(slug, true);

  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml", "toml"])
    .use(remarkParseFrontmatter)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(inferReadingTime)
    .use(rehypeExternalLinks, { rel: "noopener noreferrer", target: "_blank" })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(await read(filePath));

  return result;
};

export const buildPostList = async () => {
  // get path to /blog folder of markdown files
  const folderPath = getFolderPath();

  // read all filenames from the top-level of the /blog folder
  const filenames = fs.readdirSync(folderPath);

  // only keep the markdown files
  const markdownFilenames = filenames.filter((filename) =>
    filename.match(".md")
  );

  const posts = markdownFilenames.map(async (filename) => {
    // generate absolute path to markdown file
    const path = getMarkdownFilePath(filename);

    const result = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter, ["yaml", "toml"])
      .use(remarkParseFrontmatter)
      .use(
        preview(
          textFormatter({
            length: 200,
          })
        )
      )
      .use(remarkRehype)
      .use(inferReadingTime)
      .use(rehypeStringify)
      .process(await read(path));

    const frontmatter = result.data.frontmatter as {
      share: boolean;
      slug: string;
      title: string;
      readTime: number;
    };

    const previewData = result.data.fm as { preview: string[] };
    const previewText = previewData.preview;

    return { ...frontmatter, preview: previewText };
  });

  return await Promise.all(posts);
};
