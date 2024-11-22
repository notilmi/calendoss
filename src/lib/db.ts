import { neon } from "@neondatabase/serverless";

export function getNeonClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  return neon(process.env.DATABASE_URL!);
}
