import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "./syntax-highlighting-override.css";

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
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="m-10 text-center font-semibold text-[1.6rem]">
        I&apos;m a builder.
      </h2>
      <p>
        I spend my time developing new websites and products while
        simultaneously willing quirky side-projects into existence. I tend to
        impulsively learn new things for no apparent reason, take really long
        walks in nature, and I think Indie music is pretty cool.
      </p>
      <pre className="json hljs p-4 rounded-xl font-mono text-lg leading-6">
        <code dangerouslySetInnerHTML={{ __html: htmlWithCursor }} />
      </pre>
    </section>
  );
}
