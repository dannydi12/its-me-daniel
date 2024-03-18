import { useState } from "react";
import scaredSVG from "assets/scared.svg?url";
import happySVG from "assets/happy.svg?url";

export default function Hero() {
  const [interacted, setInteracted] = useState(false);

  return (
    <section className="bg-primary-500 min-h-[50vh] flex items-center flex-col justify-between">
      <h1 className="text-white text-8xl font-bold my-auto text-center">
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
