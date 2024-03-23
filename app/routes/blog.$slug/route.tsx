import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMarkdownFilePath } from "./getMarkdownFilePath";
import { parseMarkdown } from "./markdownParsing";

import syntaxHighlighting from "highlight.js/styles/base16/bright.min.css?url";
import syntaxHighlightingOverride from "@/styles/blog-syntax-highlighting-override.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: syntaxHighlighting },
  { rel: "stylesheet", href: syntaxHighlightingOverride },
];

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const filePath = getMarkdownFilePath(params.slug || "");
  const result = await parseMarkdown(filePath);

  return json({
    content: result.toString(),
    meta: result.data.frontmatter as {
      share: boolean;
      slug: string;
      title: string;
      readTime: number;
    },
  });
};

export default function PostSlug() {
  const { content, meta } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex min-h-[30vh] items-center justify-center bg-primary-500 p-2 py-7 sm:p-20">
        <h1 className="text-center text-5xl font-bold text-white drop-shadow sm:text-7xl sm:mt-0 mt-10">
          {meta.title}
        </h1>
      </div>
      <main
        className="prose m-5 pt-12 sm:prose-lg prose-h2:mb-5 prose-h2:text-4xl prose-p:text-gray-950 prose-a:text-primary-600 prose-code:rounded-md prose-code:bg-gray-200 prose-code:px-2 prose-code:py-1 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-img:mx-auto prose-img:rounded-md sm:mx-auto prose-h2:sm:text-5xl "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
