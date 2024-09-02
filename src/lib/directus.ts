import { createDirectus, rest, type CoreSchema, } from "@directus/sdk";

export const API_URL = "https://api.cpp-jll.com";

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

export const directus = createDirectus(API_URL).with(rest());
