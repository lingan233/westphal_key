import { writable } from 'svelte/store';

export const all_tags = writable([]);

export const selected_tags = writable([]);

export const displaying_tags = writable([]);
