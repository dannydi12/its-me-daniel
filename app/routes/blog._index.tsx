import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ChevronLeftIcon, ClockIcon } from "@heroicons/react/20/solid";

import syntaxHighlighting from "highlight.js/styles/base16/bright.min.css?url";
import syntaxHighlightingOverride from "@/styles/blog-syntax-highlighting-override.css?url";
import { buildPostList } from "../utils/markdownParsing";
import Tag from "@/components/Tag";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: syntaxHighlighting },
  { rel: "stylesheet", href: syntaxHighlightingOverride },
];

export const loader = async () => {
  const posts = await buildPostList();

  return json(
    { posts },
    {
      headers: {
        "Vercel-CDN-Cache-Control":
          "public, s-maxage=15778800, stale-while-revalidate=31557600",
        "Cache-Control": "public, max-age=300, must-revalidate",
      },
    }
  );
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  const sortedPosts = posts
    .map((post) => ({ ...post, Date: new Date(post.Date || 0) }))
    .sort((a, b) => b.Date.valueOf() - a.Date.valueOf());

  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="bg-primary-500 px-5 pt-7">
        <div className="flex justify-between">
          <Link
            className="hover:cursor flex items-center gap-1 rounded py-2 pl-2 pr-4 text-xl text-white backdrop-brightness-75 transition-all hover:backdrop-brightness-90"
            to={"/"}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Portfolio
          </Link>
        </div>

        <div className="sm:p-15 flex min-h-[30vh] items-center justify-center">
          <h1 className="my-10 text-center text-5xl font-bold text-white sm:my-0 sm:text-7xl">
            Hi, this is my blog.
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-2xl px-4">
        <ul className="my-14 flex flex-col gap-6">
          {sortedPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <li className="group rounded-xl p-6 shadow transition-[2s] hover:bg-gray-50 hover:shadow-md">
                <h2 className="text-2xl font-bold group-hover:text-primary-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-base font-medium text-gray-700">
                  {post.preview}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className=" flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>

                  <p className="flex items-center gap-1 text-sm font-bold text-gray-400">
                    <ClockIcon className="h-5 w-5" />
                    {post.readTime.toFixed(0)}m
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>

      <footer className="mt-auto bg-primary-500 font-medium text-white">
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
    </div>
  );
}
