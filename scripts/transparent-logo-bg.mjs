import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '..', 'public', 'atlaschamp-logo-footer.png');
const output = input;

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.hypot(r1 - r2, g1 - g2, b1 - b2);
}

function floodFillWhiteBackground(pixels, width, height, tolerance = 34) {
  const bg = [255, 255, 255];
  const visited = new Uint8Array(width * height);
  const queue = [];

  const trySeed = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const i = idx * 4;
    if (pixels[i + 3] === 0) return;
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bg) <= tolerance) {
      queue.push(idx);
    }
  };

  for (let x = 0; x < width; x++) {
    trySeed(x, 0);
    trySeed(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    trySeed(0, y);
    trySeed(width - 1, y);
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    if (visited[idx]) continue;
    visited[idx] = 1;

    const i = idx * 4;
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bg) > tolerance) {
      continue;
    }

    pixels[i + 3] = 0;

    const x = idx % width;
    const y = (idx - x) / width;
    if (x > 0) tryPush(idx - 1);
    if (x < width - 1) tryPush(idx + 1);
    if (y > 0) tryPush(idx - width);
    if (y < height - 1) tryPush(idx + width);
  }

  function tryPush(nextIdx) {
    if (visited[nextIdx]) return;
    const i = nextIdx * 4;
    if (pixels[i + 3] === 0) return;
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bg) <= tolerance) {
      queue.push(nextIdx);
    }
  }
}

const file = readFileSync(input);
const { data, info } = await sharp(file)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Buffer.from(data);
floodFillWhiteBackground(pixels, info.width, info.height);

const png = await sharp(pixels, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(output, png);
console.log(`Transparent background applied: ${output}`);
