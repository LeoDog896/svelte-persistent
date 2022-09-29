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

## in combination with [svelte-writable-derived](https://github.com/PixievoltNo1/svelte-writable-derived)

```ts
import { localStore } from 'svelte-persistent'; // or sessionStorage!
import writableDerived from "svelte-writable-derived";

var objectStore = writableDerived(
	localStore('content', '{}'), // create a local store with key: content, defaultValue: {}
	(json) => JSON.parse(json),
	(object) => JSON.stringify(object)
);
```
