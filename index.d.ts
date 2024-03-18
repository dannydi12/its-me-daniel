export {};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I don't have the gtag type definitions
    gtag: any;
  }
}
