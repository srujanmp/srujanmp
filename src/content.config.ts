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
    // Headline work, listed first. Everything else falls under "More builds".
    featured: z.boolean().default(false),
    // Explicit position inside its group; lower comes first. Use a high number
    // to pin something to the end. Unset falls back to newest-year-first.
    order: z.number().optional(),
  }),
});

const experience = defineCollection({
  // Tell Astro exactly where to find the experience MDX files
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/experience" }),
  // `image()` gives the logo the same optimisation pipeline as any other asset.
  schema: ({ image }) => z.object({
    role: z.string(),
    company: z.string(),
    companyLink: z.string().optional(),
    date: z.string(),
    location: z.string(),
    logo: image().optional(),
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