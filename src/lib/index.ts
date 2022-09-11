import { writable, type Writable } from 'svelte/store';
import { onMount } from 'svelte';

interface StorageLike {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
}

function store(
	key: string,
	initialValue: string,
	storage: () => StorageLike,
	storageName: string
): Writable<string> {
	const { subscribe, set, update } = writable(initialValue);

	onMount(() => {
		const value = storage().getItem(key);
		if (!value) return;
		set(value);
	});

	return {
		subscribe,
		update,
		set: (value: string) => {
			storageName in globalThis && storage().setItem(key, value);
			set(value);
		}
	};
}

export function localStore(key: string, initialValue: string): Writable<string> {
	return store(key, initialValue, () => localStorage, 'localStorage');
}

export function sessionStore(key: string, initialValue: string): Writable<string> {
	return store(key, initialValue, () => sessionStorage, 'sessionStorage');
}
