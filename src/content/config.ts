import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        image: image(),
        imageAlt: z.string(),
        slidesEmbed: z.string().optional(),
    }),
});

const boardCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        position: z.string(),
        image: image(),
        imageAlt: z.string(),
        bio: z.string(),
        discord: z.string().optional(),
        linkedin: z.string().optional(),
        instagram: z.string().optional(),
        github: z.string().optional(),
        youtube: z.string().optional(),
    }),
});

export const collections = {
    events: eventsCollection,
    board: boardCollection,
};