<script lang="ts">
	import { localStore, sessionStore } from '$lib/index';

	const local = localStore('content', 'local');
	const session = sessionStore('content', 'session');
</script>

<main>
	<h1>svelte-persist</h1>
	<h3><a href="https://github.com/LeoDog896/svelte-persist">github</a></h3>
	<p>ridiculously simple svelte writable persistance: SvelteKit first, with Svelte support</p>

	<p><code>npm i -D svelte-persist</code></p>

	<p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">Local:</a>
		<input bind:value={$local} />
	</p>
	<p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage">Session:</a>
		<input bind:value={$session} />
	</p>

	<p>
		NOTE: <b>svelte-persist only works with strings.</b> This library is best paired with
		<a href="https://github.com/PixievoltNo1/svelte-writable-derived">svelte-writable-derived</a>
	</p>


    <pre><code>{`import {
    localStore, sessionStore
} from '$lib/index';

// key, default value if none loaded.
const local = localStore('content', 'local');
const session = sessionStore('content', 'session');`}</code></pre>
</main>

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
