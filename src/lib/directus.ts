import { createDirectus, rest, type CoreSchema, } from "@directus/sdk";

type Global = {
    title: string;
    description: string;
}

type Board = {
    status: 'active' | 'inactive';
    name: string;
    position: string;
    service: string;
    biography: string;
    image: string;
}

type Event = {
    title: string;
    description: string;
    datetime: string;
    location: string;
    image: string;
    content: string;
    slug: string;
}

const directus = createDirectus('https://api.cpp-jll.com').with(rest());

export default directus;