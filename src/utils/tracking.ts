import ReactGA from "react-ga";

export const clickEvent = (type: string, title?: string) => {
  ReactGA.event({
    category: "User",
    action: `Clicked ${type} link${title ? ` for ${title}` : ""}`,
  });
};

export const hoverEvent = (type: string) => {
  ReactGA.event({
    category: "User",
    action: `Hovered on ${type} link`,
  });
};
