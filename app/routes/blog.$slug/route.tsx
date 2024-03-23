import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { parseMarkdown } from "../../utils/markdownParsing";
import { ChevronLeftIcon, ClockIcon } from "@heroicons/react/24/solid";

import syntaxHighlighting from "highlight.js/styles/base16/bright.min.css?url";
import syntaxHighlightingOverride from "@/styles/blog-syntax-highlighting-override.css?url";
import { FrontMatterData } from "@/utils/frontmatter.types";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: syntaxHighlighting },
  { rel: "stylesheet", href: syntaxHighlightingOverride },
];

// TODO: not working yet
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.meta.title }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const result = await parseMarkdown(params.slug || "");

  return json({
    content: result.toString(),
    meta: result.data.frontmatter as FrontMatterData,
  });
};

export default function PostSlug() {
  const { content, meta } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="bg-primary-500 p-5 py-7">
        <div className="flex justify-between">
          <Link
            className="hover:cursor flex items-center gap-1 rounded py-2 pl-2 pr-4 text-xl text-white backdrop-brightness-75 transition-all hover:backdrop-brightness-90"
            to={"/blog"}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            All Posts
          </Link>
          <p className="flex items-center gap-1 text-base font-medium text-white">
            <ClockIcon className="h-5 w-5" />
            {meta.readTime.toFixed(0)}m
          </p>
        </div>

        <div className="sm:p-15 flex min-h-[30vh] items-center justify-center">
          <h1 className="my-10 text-center text-5xl font-bold text-white sm:my-0 sm:text-7xl">
            {meta.title}
          </h1>
        </div>
      </header>
      <main
        className="prose m-5 pt-12 sm:prose-lg prose-h2:mb-5 prose-h2:text-4xl prose-p:text-gray-950 prose-a:text-primary-600 prose-code:rounded-md prose-code:bg-gray-200 prose-code:px-2 prose-code:py-1 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-img:mx-auto prose-img:rounded-md sm:mx-auto prose-h2:sm:text-5xl "
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-[15vh] bg-primary-500 font-medium text-white">
        <p className="py-4 text-center text-lg">
          Crafted by{" "}
          <Link className="underline" to={"/"}>
            Daniel Di Venere
          </Link>{" "}
          <span role="img" aria-label="ice cream">
            🤖
          </span>
        </p>
      </footer>
    </>
  );
}
