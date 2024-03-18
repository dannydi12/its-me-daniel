export const clickEvent = (type: string, title?: string) => {
  window.gtag("event", `Clicked ${type} link${title ? ` for ${title}` : ""}`);
};

export const hoverEvent = (type: string) => {
  window.gtag("event", `Hovered on ${type} link`);
};
