import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Job listing type
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

// Team/Department type
export interface Team {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

// Event type
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

// Product type
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

// Innovation story type
export interface InnovationStory {
  id: string;
  title: string;
  description: string;
  image: string;
}
