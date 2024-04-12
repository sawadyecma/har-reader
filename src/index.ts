import { harSchema } from "./schema";
import { Entry } from "./types";
import { readFile } from "./file";
import { makeUrlDynamic } from "./makeUrlDynamic";
import { makeRanking } from "./reduce/makeRanking";

async function main() {
  const read = await readFile();
  if (!read.ok) {
    return;
  }

  const parsed = harSchema.parse(read.data);

  const entries = parsed.log.entries;

  makeRanking(entries);
}

main();
