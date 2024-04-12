import { Result } from "./types";
import fs from "node:fs";

export function readFile(): Promise<Result<unknown>> {
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
