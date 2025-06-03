import { defineCollection, z } from 'astro:content';

import {glob} from 'astro/loaders';

const blog = defineCollection({ 
   loader: glob({pattern:"**/*.md", base:"./src/content/blog"}),
   schema: ({image}) => 
    z.object({
        title: z.string().max(60),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().optional(),
        image: image().optional(),
        tags: z.array(z.string()).optional(),
    })
   });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };