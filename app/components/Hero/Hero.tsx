import { useState } from "react";
import scaredSVG from "assets/scared.svg?url";
import happySVG from "assets/happy.svg?url";
import { Link } from "@remix-run/react";

export default function Hero() {
  const [interacted, setInteracted] = useState(false);

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-between bg-primary-500">
      <div className="m-8 flex self-end">
        <Link
          className="hover:cursor flex items-center gap-1 rounded px-4 py-2 text-xl text-white backdrop-brightness-75 transition-all hover:backdrop-brightness-90"
          to={"/blog"}
        >
          Blog
        </Link>
      </div>
      <h1 className="my-auto text-center text-4xl font-bold text-white sm:text-8xl">
        Hi, it&apos;s me. Daniel.
      </h1>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onMouseEnter={() =>
          window.innerWidth > 900 && setInteracted(!interacted)
        }
        onMouseLeave={() =>
          window.innerWidth > 900 && setInteracted(!interacted)
        }
        onClick={() => setInteracted(!interacted)}
      >
        <img
          className="max-w-min"
          src={interacted ? scaredSVG : happySVG}
          alt="me"
        />
      </div>
    </section>
  );
}
