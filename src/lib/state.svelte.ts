import { default_links } from "./constants";

interface Store {
	links: { name: string; href: string }[];
}

export const store: Store = $state({
	links: default_links
});

export const drawings = $state([]);
export const projects = $state([]);
export const blogs = $state([]);
export const photos = $state([]);
export const writings = $state([]);
export const songs = $state([]);
