import { z } from "zod";
import { entrySchema } from "./schema";

export type Entry = z.infer<typeof entrySchema>;

export type Result<D> =
  | {
      ok: true;
      data: D;
    }
  | {
      ok: false;
      error: Error;
    };
