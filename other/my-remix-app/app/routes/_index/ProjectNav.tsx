import { Form, useSearchParams } from "@remix-run/react";
import clsx from "clsx";

export default function ProjectNav() {
  const [searchParams] = useSearchParams();
  const categoryState = searchParams.get("work") || "featured";

  return (
    <nav className="max-w-[50%] mx-auto">
      <Form preventScrollReset>
        <ul className="flex justify-between">
          <li
            className={clsx("text-2xl hover:border-b-4 border-primary-500", {
              "border-b-4": categoryState === "featured",
            })}
          >
            <button name="work" value="featured">
              Featured
            </button>
          </li>
          <li
            className={clsx("text-2xl hover:border-b-4 border-primary-500", {
              "border-b-4": categoryState === "other",
            })}
          >
            <button name="work" value="other">
              Other
            </button>
          </li>
        </ul>
      </Form>
    </nav>
  );
}
