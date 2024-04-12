import { validate } from "uuid";
import { Result } from "./types";

const isInterger = (s: string): Result<number> => {
  const parsed = parseInt(s);
  if (isNaN(parsed)) {
    return { ok: false, error: new Error(`${s}, is not interger`) };
  }
  return { ok: true, data: parsed };
};

const isUUID = (s: string) => validate(s);

export const makeUrlDynamic = (url: URL) => {
  const path = url.pathname;

  const items = path.split("/");

  return items
    .map((item) => {
      const isUUIDResult = isUUID(item);
      if (isUUIDResult) return ":uuid";

      const isIntResult = isInterger(item);
      if (isIntResult.ok) return ":number";

      return item;
    })
    .join("/");
};
