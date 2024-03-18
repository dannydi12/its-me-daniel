import { Link } from "@remix-run/react";

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
    <div className="h-fit max-w-[355px] mt-8 mb-12 shadow-md mx-auto">
      <img className="w-full h-[185px] max-w-[355px]" src={image} alt={title} />
      <div className="p-5">
        <h3 className="text-[1.7rem] font-bold mb-3">{title}</h3>
        <p>{description}</p>
        <p className="text-gray-500 my-5">{languages.join(", ")}</p>
        <div className="flex justify-around">
          <Link
            className="text-primary-500 border-[3px] p-2 text-lg w-[30%] text-center border-primary-500 hover:bg-primary-500 hover:text-white"
            rel="noreferrer"
            target="_blank"
            to={live}
          >
            Live
          </Link>
          {repo && (
            <Link
              className="text-primary-500 border-[3px] p-2 text-lg w-[30%] text-center border-primary-500 hover:bg-primary-500 hover:text-white"
              rel="noreferrer"
              target="_blank"
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
