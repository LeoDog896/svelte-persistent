import { writable, type Writable } from 'svelte/store';
import { onMount } from 'svelte';

interface StorageLike {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
}

type Serializable = unknown;

function store<T extends Serializable>(
	key: string,
	initialValue: T,
	storage: () => StorageLike,
	storageName: string
): Writable<T> {
	const { subscribe, set, update } = writable<T>(initialValue);

	onMount(() => {
		const value = storage().getItem(key);
		if (!value) return;
		set(JSON.parse(value));
	});

	return {
		subscribe,
		update,
		set: (value: T) => {
			storageName in globalThis && storage().setItem(key, JSON.stringify(value));
			set(value);
		}
	};
}

export function localStore<T extends Serializable>(key: string, initialValue: T): Writable<T> {
	return store(key, initialValue, () => localStorage, 'localStorage');
}

export function sessionStore<T extends Serializable>(key: string, initialValue: T): Writable<T> {
	return store(key, initialValue, () => sessionStorage, 'sessionStorage');
}
