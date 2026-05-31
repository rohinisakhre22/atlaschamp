import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.hypot(r1 - r2, g1 - g2, b1 - b2);
}

function sampleBackgroundColor(data, width, height, channels) {
  const samples = [
    [2, 2],
    [width - 3, 2],
    [2, height - 3],
    [width - 3, height - 3],
  ];

  let r = 0;
  let g = 0;
  let b = 0;

  for (const [x, y] of samples) {
    const i = (y * width + x) * channels;
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }

  const n = samples.length;
  return [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
}

async function removeBackground(inputPath, outputPath, tolerance = 42) {
  const input = readFileSync(inputPath);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  const { width, height, channels } = info;
  const [bgR, bgG, bgB] = sampleBackgroundColor(pixels, width, height, channels);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const dist = colorDistance(
        pixels[i],
        pixels[i + 1],
        pixels[i + 2],
        bgR,
        bgG,
        bgB
      );

      if (dist <= tolerance) {
        pixels[i + 3] = 0;
      }
    }
  }

  const output = await sharp(pixels, {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  writeFileSync(outputPath, output);
  console.log(`Wrote ${outputPath} (bg ~ rgb(${bgR},${bgG},${bgB}), tolerance ${tolerance})`);
}

await removeBackground(
  join(publicDir, 'atlaschamp-logo.png'),
  join(publicDir, 'atlaschamp-logo.png'),
  38
);

await removeBackground(
  join(publicDir, 'atlaschamp-logo-dark.png'),
  join(publicDir, 'atlaschamp-logo-dark.png'),
  48
);
