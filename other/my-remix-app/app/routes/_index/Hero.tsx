/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";

export default function Hero() {
  const [interacted, setInteracted] = useState(false);

  return (
    <section className="bg-primary-500 min-h-[50vh] flex items-center flex-col justify-between">
      <h1 className="text-white text-8xl font-bold my-auto text-center">
        Hi, it&apos;s me. Daniel.
      </h1>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onMouseEnter={() => setInteracted(!interacted)}
        onMouseLeave={() => setInteracted(!interacted)}
        onClick={() => setInteracted(!interacted)}
      >
        <img
          className="max-w-min"
          src={interacted ? "/assets/scared.svg" : "/assets/happy.svg"}
          alt="me"
        />
      </div>
    </section>
  );
}
