import { Link } from "@remix-run/react";
import { clickEvent } from "../Contact/tracking";

type Props = {
  title: string;
  description: string;
  image: string;
  languages: string[];
  repo?: string;
  live: string;
};
export default function Project({
  title,
  description,
  image,
  languages,
  repo,
  live,
}: Props) {
  return (
    <div className="mx-auto mb-12 mt-8 h-fit max-w-[355px] shadow-md">
      <img className="h-[185px] w-full max-w-[355px]" src={image} alt={title} />
      <div className="p-5">
        <h3 className="mb-3 text-[1.7rem] font-bold">{title}</h3>
        <p>{description}</p>
        <p className="my-5 text-gray-500">{languages.join(", ")}</p>
        <div className="flex justify-around">
          <Link
            className="w-[30%] border-[3px] border-primary-500 p-2 text-center text-lg text-primary-500 hover:bg-primary-500 hover:text-white"
            rel="noreferrer"
            target="_blank"
            onClick={() => clickEvent("Live", title)}
            to={live}
          >
            Live
          </Link>
          {repo && (
            <Link
              className="w-[30%] border-[3px] border-primary-500 p-2 text-center text-lg text-primary-500 hover:bg-primary-500 hover:text-white"
              rel="noreferrer"
              target="_blank"
              onClick={() => clickEvent("Repo", title)}
              to={repo}
            >
              Repo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
