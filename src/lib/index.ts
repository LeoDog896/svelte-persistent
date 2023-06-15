import { writable, type Writable } from 'svelte/store';
import { onMount } from 'svelte';

interface StorageLike {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
}

type Serializable = unknown;

/**
 * Store wrapper object. Wraps around any Storage object and turns it into a writable store.
 * @param key The key to store the value under.
 * @param initialValue The initial value to store.
 * @param storage The storage object to use. (Must be a lambda to run onMount)
 * @param storageName The name of the storage object.
 * @returns A writable store.
 */
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

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * 
 * Backed by localStorage.
 */
export function localStore<T extends Serializable>(key: string, initialValue: T): Writable<T> {
	return store(key, initialValue, () => localStorage, 'localStorage');
}

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * 
 * Backed by sessionStorage.
 */
export function sessionStore<T extends Serializable>(key: string, initialValue: T): Writable<T> {
	return store(key, initialValue, () => sessionStorage, 'sessionStorage');
}
