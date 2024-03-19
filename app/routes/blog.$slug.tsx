import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import { fileURLToPath } from "url";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { read } from "to-vfile";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const absolutePath = path.resolve(
    __dirname,
    "../../blog",
    `${params.slug}.md`
  );

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read(absolutePath));

  return json({ markdownContent: result.toString() });
};

export default function PostSlug() {
  const { markdownContent } = useLoaderData<typeof loader>();
  console.log(markdownContent);
  return (
    <main
      className="mx-auto max-w-4xl prose sm:prose-lg prose-h1:mb-0 prose-h1:mt-14 prose-a:text-primary-600"
      dangerouslySetInnerHTML={{ __html: markdownContent }}
    >
      {/* <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </main>
  );
}
