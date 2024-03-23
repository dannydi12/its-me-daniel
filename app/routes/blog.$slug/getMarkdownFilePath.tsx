import path from "path";
import { fileURLToPath } from "url";

export const getMarkdownFilePath = (
  filename: string,
  addExtension?: boolean
) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const absolutePath = path.resolve(
    __dirname,
    "../../../blog",
    `${filename}${addExtension ? ".md" : ""}`
  );

  return absolutePath;
};

export const getFolderPath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const absolutePath = path.resolve(__dirname, "../../../blog");

  return absolutePath;
};
