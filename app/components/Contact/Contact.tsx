import { Link, useFetcher } from "@remix-run/react";
import TimeBasedMesage from "./TimeBasedMessage";
import { clickEvent, hoverEvent } from "./tracking";
import { action } from "@/routes/surprise";

export default function Contact() {
  const fetcher = useFetcher<typeof action>();

  const buttonState = () => {
    if (fetcher.state === "submitting") {
      return "Scaring Daniel...";
    }

    if (fetcher.data) {
      return "Daniel is now terrified.";
    }

    return "Scare Daniel";
  };

  return (
    <section className="mx-auto max-w-3xl p-4">
      <h2 className="my-10 text-center text-4xl font-semibold">Contact</h2>
      <TimeBasedMesage />

      <ul className="my-6 list-disc pl-10 text-[1.38rem] leading-[2.1rem]">
        <li>
          <Link
            onMouseEnter={() => hoverEvent("Github")}
            onClick={() => clickEvent("Github")}
            className="text-primary-600 underline hover:text-primary-500"
            to="https://github.com/dannydi12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={() => hoverEvent("LinkedIn")}
            onClick={() => clickEvent("LinkedIn")}
            className="text-primary-600 underline hover:text-primary-500"
            to="https://www.linkedin.com/in/danieldivenere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={() => hoverEvent("Email")}
            onClick={() => clickEvent("Email")}
            className="text-primary-600 underline hover:text-primary-500"
            to="mailto:hi@danthebuilder..com?subject=Hey,%20let's%20talk.&body=What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </li>
      </ul>

      <p>
        If traditional methods of communication aren&apos;t your thing, click
        the button and it will turn on the custom LED server I installed in my
        room. It&apos;s pretty jarring, and I&apos;ll just think it&apos;s the
        robot uprising.
      </p>

      <fetcher.Form action="/surprise" method="post" preventScrollReset>
        <button
          type="submit"
          onClick={() => {
            clickEvent("Scare Daniel");
          }}
          disabled={!!fetcher.data || fetcher.state !== "idle"}
          className="mx-auto mt-8 block border-[3px] border-primary-500 px-5 py-3 text-center text-xl text-primary-500 hover:bg-primary-500 hover:text-white"
        >
          {buttonState()}
        </button>
      </fetcher.Form>
    </section>
  );
}
