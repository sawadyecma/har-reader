import { makeUrlDynamic } from "../makeUrlDynamic";
import { Entry } from "../types";

export function makeRanking(
  entries: Entry[]
): { order: number; count: number; url: string }[] {
  const counter = new Map<string, number>();
  const timer = new Map<string, number>();

  entries.forEach((entry) => {
    const url = new URL(entry.request.url);
    const dynamicUrl = makeUrlDynamic(url);

    const count = counter.get(dynamicUrl);
    counter.set(dynamicUrl, count ? count + 1 : 1);

    const newCount = counter.get(dynamicUrl)!;

    const time = timer.get(dynamicUrl);
    timer.set(
      dynamicUrl,
      time ? (time * (newCount - 1) + entry.time) / newCount : entry.time
    );
  });

  console.log(Object.fromEntries(counter));
  console.log(Object.fromEntries(timer));

  return [];
}
