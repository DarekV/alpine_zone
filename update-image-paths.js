import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryPath = path.join(__dirname, "src");

function updateImagePaths(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateImagePaths(filePath);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (
        [".js", ".jsx", ".ts", ".tsx", ".html", ".vue", ".svelte"].includes(ext)
      ) {
        replaceImagePathInFile(filePath);
      }
    }
  });
}

function replaceImagePathInFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const regex = /\/src\/img\/(.*?)\.(jpg|jpeg|png|gif)/g;
    const newData = data.replace(regex, "/src/optimized/$1.webp");

    fs.writeFile(filePath, newData, "utf8", (err) => {
      if (err) console.error(err);
      else console.log(`Updated image paths in ${filePath}`);
    });
  });
}

updateImagePaths(directoryPath);
