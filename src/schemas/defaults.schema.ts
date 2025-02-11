import { z } from "zod";

export const querySchema = z.object({
  query: z.object({
    page: z.number().optional(),
  }),
});

export type QuerySchemaType = z.infer<typeof querySchema>["query"];

export const paramsSchema = z.object({
  params: z.object({
    id: z.string({
      required_error: "ID is required",
      invalid_type_error: "ID must be a string",
    }),
  }),
});

export type ParamsSchemaType = z.infer<typeof paramsSchema>["params"];
