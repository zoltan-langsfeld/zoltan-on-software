import { defineCollection, z } from 'astro:content';

import { glob} from 'astro/loaders';

const blog = defineCollection({ 
   loader: glob({patter:"**/*.md", base:"./src/content/blog/2025"}),
   schema: ({image}) => 
    z.object({
        title: z.string().max(60),
        description: z.string().max(160),
        pubDate: z.date(),
        author: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
   });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };