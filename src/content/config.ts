import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
    }),
});

export const collections = {
    events: eventsCollection,
};