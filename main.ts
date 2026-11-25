// news-image-20261125: write the day's front page to the output directory.
//
// The image lives in this repository as entry.png. It is JPEG data under a
// .png name, which is allowed: the gate tells the format from the first
// bytes, not from the extension. This program copies those exact bytes to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set) and nothing else.
// Node 22, standard library only, no network, deterministic by construction.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ONE_MIB = 1024 * 1024;
const JPEG_MAGIC = [0xff, 0xd8, 0xff];
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47];

function startsWith(bytes: Buffer, magic: number[]): boolean {
  return magic.every((byte, i) => bytes[i] === byte);
}

const repoDir = dirname(fileURLToPath(import.meta.url));
const image = readFileSync(join(repoDir, "entry.png"));

if (!startsWith(image, JPEG_MAGIC) && !startsWith(image, PNG_MAGIC)) {
  throw new Error("entry.png does not start with JPEG or PNG magic bytes");
}
if (image.length > ONE_MIB) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

// The grader runs this program twice into the same output directory, and
// the file written by the first run is read-only, so the destination has to
// be cleared before the second run writes over it. Only the destination
// file is removed: the output directory itself is a mount point in the
// grader, and deleting it fails with EBUSY and exits 1.
mkdirSync(outputDir, { recursive: true });
rmSync(destination, { force: true });
writeFileSync(destination, image);

// Read the copy back and check its leading bytes still match the source,
// so a truncated or partial write is caught here instead of in the gate.
const written = readFileSync(destination);
if (
  written.length !== image.length ||
  !startsWith(written, JPEG_MAGIC) ||
  !written.equals(image)
) {
  throw new Error("copied entry.png does not match the source");
}
