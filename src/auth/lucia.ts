import { lucia } from "lucia";
import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import { astro } from "lucia/middleware";
import { sqliteDatabase } from "@src/db";

export const auth = lucia({
  adapter: betterSqlite3(sqliteDatabase, {
    user: "user",
    session: "user_session",
    key: "user_key",
  }),
  middleware: astro(),
  env: import.meta.env.DEV ? "DEV" : "PROD",
  getUserAttributes: (data) => {
    return {
      name: data.name,
      email: data.email,
      isAdmin: Boolean(data.is_admin),
      isApproved: Boolean(data.is_approved),
      createdAt: data.created_at,
    };
  },
});

export type Auth = typeof auth;
