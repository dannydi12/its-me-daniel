import { unified } from "unified";
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

export const parseMarkdown = async (filePath: string) => {
  function inferReadingTime() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- can't find the types for these 🤷‍♂️
    return (tree: any, file: any) => {
      file.data.frontmatter.readTime = readingTime(tree, { age: 16 });
    };
  }

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
