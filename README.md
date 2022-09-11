# svelte-persist

Demo: https://leodog896.github.io/svelte-persist/

localStorage and sessionStorage writables for SvelteKit & Svelte. SSR safe.

```bash
npm i -D svelte-persist
```

```ts
import { localStore, sessionStore } from '$lib/index';

// key, default value if none loaded.
const local = localStore('content', 'local');
const session = sessionStore('content', 'session');
```
