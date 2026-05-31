import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '..', 'public', 'logo3.png');

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.hypot(r1 - r2, g1 - g2, b1 - b2);
}

function floodFillFromEdges(pixels, width, height, bgRgb, tolerance) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const trySeed = (x, y) => {
    const idx = y * width + x;
    const i = idx * 4;
    if (pixels[i + 3] === 0) return;
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bgRgb) <= tolerance) {
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
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bgRgb) > tolerance) {
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
    if (colorDistance(pixels[i], pixels[i + 1], pixels[i + 2], ...bgRgb) <= tolerance) {
      queue.push(nextIdx);
    }
  }
}

function sampleCornerBg(data, width, height, channels) {
  const pts = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  let r = 0,
    g = 0,
    b = 0;
  for (const [x, y] of pts) {
    const i = (y * width + x) * channels;
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  return [Math.round(r / 4), Math.round(g / 4), Math.round(b / 4)];
}

let pipeline = sharp(readFileSync(file)).ensureAlpha();

const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });
const pixels = Buffer.from(data);
const bg = sampleCornerBg(pixels, info.width, info.height, info.channels);
const avg = (bg[0] + bg[1] + bg[2]) / 3;
const tolerance = avg < 40 ? 42 : avg > 200 ? 36 : 40;

floodFillFromEdges(pixels, info.width, info.height, bg, tolerance);

let out = await sharp(pixels, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .trim({ threshold: 12 })
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(file, out);
const meta = await sharp(out).metadata();
console.log(`Trimmed ${file} → ${meta.width}x${meta.height}px`);
