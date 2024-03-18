import TimeBasedMesage from "./TimeBasedMessage";
import { clickEvent, hoverEvent } from "./tracking";

export default function Contact() {
  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="my-10 text-center font-semibold text-4xl">Contact</h2>
      <TimeBasedMesage />

      <ul className="list-disc text-[1.38rem] leading-[2.1rem] pl-10 my-6">
        <li>
          <a
            onMouseEnter={() => hoverEvent("Github")}
            onClick={() => clickEvent("Github")}
            className="underline text-primary-600 hover:text-primary-500"
            href="https://github.com/dannydi12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => hoverEvent("LinkedIn")}
            onClick={() => clickEvent("LinkedIn")}
            className="underline text-primary-600 hover:text-primary-500"
            href="https://www.linkedin.com/in/danieldivenere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => hoverEvent("Email")}
            onClick={() => clickEvent("Email")}
            className="underline text-primary-600 hover:text-primary-500"
            href="mailto:hi@danthebuilder..com?subject=Hey,%20let's%20talk.&body=What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </li>
      </ul>

      <p>
        If traditional methods of communication aren&apos;t your thing, click
        the button and it will turn on the custom LED server I installed in my
        room. It&apos;s pretty jarring, and I&apos;ll just think it&apos;s the
        robot uprising.
      </p>

      <button className="text-primary-500 border-[3px] py-3 px-5 mx-auto block mt-8 text-xl text-center border-primary-500 hover:bg-primary-500 hover:text-white">
        Scare Daniel
      </button>
    </section>
  );
}
