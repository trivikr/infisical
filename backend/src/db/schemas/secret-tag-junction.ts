// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretTagJunctionSchema = z.object({
  id: z.string().uuid(),
  secretsId: z.string().uuid(),
  secret_tagsId: z.string().uuid()
});

export type TSecretTagJunction = z.infer<typeof SecretTagJunctionSchema>;
export type TSecretTagJunctionInsert = Omit<TSecretTagJunction, TImmutableDBKeys>;
export type TSecretTagJunctionUpdate = Partial<Omit<TSecretTagJunction, TImmutableDBKeys>>;
