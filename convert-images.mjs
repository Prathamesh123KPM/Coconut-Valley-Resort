import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = __dirname;
const files = fs.readdirSync(directoryPath);

async function convertImages() {
    for (const file of files) {
        if (file.match(/\.(jpg|JPG|jpeg|JPEG|png)$/i) && !file.includes('logococonut')) {
            const ext = path.extname(file);
            const basename = path.basename(file, ext);
            const inputPath = path.join(directoryPath, file);
            // Skip logococonut.png and other important assets that user previously reverted to PNG if any
            const outputPath = path.join(directoryPath, `${basename}.webp`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 75 })
                    .toFile(outputPath);
                console.log(`Converted ${file} to WebP`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertImages();
