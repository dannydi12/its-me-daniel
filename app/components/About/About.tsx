import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "@/styles/syntax-highlighting-override.css";

export default function About() {
  const languages = `{
  "things I speak": [
    "React",
    "JavaScript",
    "TypeScript",
    "GraphQL"
    "HTML",
    "CSS",
    "Firebase",
    "Node",
    "PostgreSQL",
    "MongoDB",`;

  // syntax highlighting for code block
  hljs.registerLanguage("json", json);
  const html = hljs.highlight(languages, {
    language: "json",
  }).value;

  const htmlWithCursor =
    html +
    `\n\t<span class="hljs-string">&quot;<span class="blinking-cursor">|</span>&quot;</span>
<span class="hljs-punctuation">}</span>`;

  return (
    <section className="mx-auto max-w-3xl p-4">
      <h2 className="m-10 text-center text-[1.6rem] font-semibold">
        I&apos;m a builder.
      </h2>

      <p>
        I spend my time developing new websites and products while
        simultaneously willing quirky side-projects into existence. I tend to
        impulsively learn new things for no apparent reason, take really long
        walks in nature, and I think Indie music is pretty cool.
      </p>

      <p className="mb-5 mt-10 underline">languages.json:</p>
      <pre className="json hljs rounded-xl p-4 font-mono text-lg leading-6">
        <code dangerouslySetInnerHTML={{ __html: htmlWithCursor }} />
      </pre>

      <p className="my-5">
        But don&apos;t worry, I also speak human languages like English and
        French.
      </p>
    </section>
  );
}
