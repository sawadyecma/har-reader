console.log("Hello world!");

import fs from "node:fs";
import { harSchema } from "./schema";

type Result<D> =
  | {
      ok: true;
      data: D;
    }
  | {
      ok: false;
      error: Error;
    };

function readFile(): Promise<Result<unknown>> {
  return new Promise<Result<unknown>>((resolve) => {
    fs.readFile("./input/file.har", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        resolve({ ok: false, error: err });
        return;
      }

      resolve({ ok: true, data: JSON.parse(data) });
    });
  });
}

async function main() {
  const read = await readFile();
  if (!read.ok) {
    return;
  }

  let parsed = harSchema.parse(read.data);

  const entries = parsed.log.entries;
}

main();
