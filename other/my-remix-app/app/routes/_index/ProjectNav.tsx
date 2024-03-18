import { Form, useSearchParams } from "@remix-run/react";
import clsx from "clsx";
import { clickEvent } from "./tracking";

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
            <button
              name="work"
              value="featured"
              onClick={() => clickEvent("featured", "Project Nav Bar")}
            >
              Featured
            </button>
          </li>
          <li
            className={clsx("text-2xl hover:border-b-4 border-primary-500", {
              "border-b-4": categoryState === "other",
            })}
          >
            <button
              name="work"
              value="other"
              onClick={() => clickEvent("other", "Project Nav Bar")}
            >
              Other
            </button>
          </li>
        </ul>
      </Form>
    </nav>
  );
}
