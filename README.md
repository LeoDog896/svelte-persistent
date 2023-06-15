# svelte-persistent

Demo: https://leodog896.github.io/svelte-persistent/

localStorage and sessionStorage writables for SvelteKit & Svelte. SSR safe.

```bash
npm i -D svelte-persistent
```

```ts
import { localStore, sessionStore } from 'svelte-persistent';

// store(key, default).
const local = localStore('content', 'local');
const session = sessionStore('content', 'session');
```

## Or JSON objects

```ts
import { localStore } from 'svelte-persistent'; // or sessionStorage!

const objectStore = localStore('content', {
	foo: 'bar'
});
```

## Why?

When calling `localStorage.set("key", value)`, this is a browser call.
SvelteKit uses SSR (server-side rendering) which doesn't allow DOM calls during the rendering process.

```js
localStorage.set('hello', 'world'); // localStorage is not defined!
```

With this in mind, in order to use localStorage effectively, you need to run it using `onMount`.

```js
import { onMount } from 'svelte';

onMount(() => {
	localStorage.set('hello', 'world'); // works!
});
```

But, then you run into two problems:

- you may want the data for SSR beforehand, so that way you have placeholder data before the page loads.
- localStorage doesn't act as a reactive store, and won't react to sets/gets

This library solves both problems with a simple to use svelte store around local OR session storage.
