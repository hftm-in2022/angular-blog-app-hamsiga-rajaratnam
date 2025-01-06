import { z } from 'zod';

// Zod Schema for BlogEntryOverview
export const BlogEntryOverviewSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  headerImageUrl: z.string().optional(),
});

export const BlogPagedDataSchema = z.object({
  data: z.array(BlogEntryOverviewSchema),
  pageIndex: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
  maxPageSize: z.number(),
});

// Zod Schema for BlogDetailOverview
export const BlogDetailOverViewSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  likes: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  headerImageUrl: z.string().optional(),
  comments: z.array(
    z.object({
      id: z.number(),
      content: z.string(),
      author: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
  ),
});

// Types inferred from Zod schemas
export type BlogEntryOverview = z.infer<typeof BlogEntryOverviewSchema>;
export type BlogPagedData = z.infer<typeof BlogPagedDataSchema>;
export type BlogDetailOverView = z.infer<typeof BlogDetailOverViewSchema>;
