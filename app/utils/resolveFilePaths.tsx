import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getMarkdownFilePath = (
  filename: string,
  addExtension?: boolean
) => {
  const absolutePath = path.resolve(
    __dirname,
    "../../blog",
    `${filename}${addExtension ? ".md" : ""}`
  );

  return absolutePath;
};

export const getFolderPath = () => {
  const absolutePath = path.resolve(__dirname, "../../blog");

  return absolutePath;
};
