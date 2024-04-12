import z from "zod";

export const harSchema = z.object({
  log: z.object({
    version: z.string(),
    creator: z.object({}),
    pages: z.array(z.object({})),
    entries: z.array(
      z.object({
        _initiator: z.object({}),
        request: z.object({
          method: z.string(),
          url: z.string(),
          headers: z.array(
            z.object({
              name: z.string(),
              value: z.string(),
            })
          ),
        }),
        response: z.object({
          status: z.number(),
          headers: z.array(
            z.object({
              name: z.string(),
              value: z.string(),
            })
          ),
        }),
        time: z.number(),
        timings: z.object({}),
      })
    ),
  }),
});
