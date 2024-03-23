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
      <div className="bg-primary-500 min-h-[30vh] flex items-center justify-center sm:p-20 p-2">
        <h1 className="text-5xl sm:text-7xl font-bold text-center text-white drop-shadow">
          {meta.title}
        </h1>
      </div>
      <main
        className="pt-12 sm:mx-auto m-5 prose sm:prose-lg prose-h2:text-4xl prose-img:mx-auto prose-h2:mb-5 prose-h2:sm:text-5xl prose-a:text-primary-600 prose-img:rounded-md prose-code:rounded-md prose-p:text-gray-950 prose-pre:p-0 prose-pre:bg-transparent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
