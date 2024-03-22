import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, "src/img");
const outputDir = path.join(__dirname, "src/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(imagesDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .toFormat("webp")
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch((err) => console.error("Error processing file:", file, err));
  });
});
