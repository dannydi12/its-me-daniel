import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import { fileURLToPath } from "url";

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

import "../components/About/syntax-highlighting-override.css";

import { read } from "to-vfile";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const absolutePath = path.resolve(
    __dirname,
    "../../blog",
    `${params.slug}.md`
  );

  function inferReadingTime() {
    return (tree, file) => {
      file.data.frontmatter.readTime = readingTime(tree, { age: 16 });
      console.log(file.data.frontmatter);
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
    .process(await read(absolutePath));

  return json({
    content: result.toString(),
    meta: result.data.frontmatter,
  });
};

export default function PostSlug() {
  const { content } = useLoaderData<typeof loader>();

  // can also try not-prose class on code block
  return (
    <main
      className="mx-auto max-w-4xl prose sm:prose-lg prose-h1:mb-0 prose-h1:mt-14 prose-a:text-primary-600 prose-img:rounded-md prose-code:rounded-md prose-p:text-gray-950 prose-pre:p-0 prose-pre:bg-transparent"
      dangerouslySetInnerHTML={{ __html: content }}
    >
      {/* <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </main>
  );
}
