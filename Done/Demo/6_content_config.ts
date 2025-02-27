// blogs: defineCollection({
// 	loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		publishDate: z.coerce.date(),
// 		tags: z.array(z.string()),
// 		img: z.string(),
// 		img_alt: z.string().optional(),
// 	})
// }),