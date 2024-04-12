import { Entry } from "../types";

const headerNames = {
  sdkMethodName: "sdk-method-name",
} as const;

export function extractSdkName(entry: Entry) {
  const skdHeader = entry.response.headers.find((header) => {
    return header.name === headerNames.sdkMethodName;
  });

  return skdHeader?.value;
}
