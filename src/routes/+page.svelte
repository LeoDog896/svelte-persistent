<script lang="ts">
	import { localStore, sessionStore } from '$lib/index';

	const local = localStore('content', 'local');
	const session = sessionStore('content', 5);
</script>

<main>
	<h1>svelte-persistent</h1>
	<h3><a href="https://github.com/LeoDog896/svelte-persistent">github</a></h3>
	<p>ridiculously simple svelte writable persistance: SvelteKit first, with Svelte support</p>

	<p><code>npm i -D svelte-persistent</code></p>

	<p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">Local:</a>
		<input bind:value={$local} />
	</p>
	<p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage">Session:</a>
		<input type="number" bind:value={$session} />
	</p>

	<pre><code
			>{`import {
    localStore, sessionStore
} from '$lib/index';

// key, default value if none loaded.
const local = localStore('content', 'local');
const session = sessionStore('content', 'session');`}</code
		></pre>
</main>

<p>
	You can use any serializable into JSON object, not just strings. The input above is bound to a
	number, but the store is a string.
</p>

<p>
	<a href="https://github.com/LeoDog896/svelte-persistent/blob/main/src/routes/%2Bpage.svelte">View this pages source</a>
</p>
<style>
	pre {
		font-family: monospace;
		background-color: #eee;
		padding: 0.5rem;
		text-align: left;
	}

	main {
		margin: 7rem;
	}

	@media (max-width: 800px) {
		main {
			margin: 4px;
			text-align: center;
		}
	}

	h1,
	h3,
	p,
	input {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
