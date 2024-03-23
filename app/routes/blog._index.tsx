import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ChevronLeftIcon, ClockIcon } from "@heroicons/react/24/solid";

import syntaxHighlighting from "highlight.js/styles/base16/bright.min.css?url";
import syntaxHighlightingOverride from "@/styles/blog-syntax-highlighting-override.css?url";
import { buildPostList } from "../utils/markdownParsing";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: syntaxHighlighting },
  { rel: "stylesheet", href: syntaxHighlightingOverride },
];

export const loader = async () => {
  const posts = await buildPostList();

  return json({ posts });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  console.log(posts);

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
            Builder Blog
          </h1>
        </div>
        <p className="bottom-0 mx-auto hidden text-center text-8xl sm:block">
          👷
        </p>
      </header>
      <main className="mx-auto max-w-2xl px-4">
        <ul className="my-14 flex flex-col gap-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <li className="group rounded-xl p-6 shadow transition-[2s] hover:bg-gray-50 hover:shadow-md">
                <h2 className="text-2xl font-bold group-hover:text-primary-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-base font-medium text-gray-700">
                  {post.preview}
                </p>
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
