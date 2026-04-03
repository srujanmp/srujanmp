import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Astro v6 specific

const projects = defineCollection({
  // Tell Astro exactly where to find the project MDX files
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    techStack: z.array(z.string()),
    link: z.string().optional(),
  }),
});

const experience = defineCollection({
  // Tell Astro exactly where to find the experience MDX files
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    date: z.string(),
    location: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
  }),
});

export const collections = { projects, experience, blog };