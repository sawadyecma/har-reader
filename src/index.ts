import { harSchema } from "./schema";
import { Entry } from "./types";
import { readFile } from "./file";

async function main() {
  const read = await readFile();
  if (!read.ok) {
    return;
  }

  const parsed = harSchema.parse(read.data);

  const entries = parsed.log.entries;

  entries.forEach((entry) => {
    const sdkName = extractSdkName(entry);
    console.log(sdkName);
  });
}

const headerNames = {
  sdkMethodName: "sdk-method-name",
} as const;

function extractSdkName(entry: Entry) {
  const skdHeader = entry.response.headers.find((header) => {
    return header.name === headerNames.sdkMethodName;
  });

  return skdHeader?.value;
}

main();
