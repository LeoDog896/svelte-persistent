<script lang="ts">
    import { localStore } from "$lib/index"

    const content = localStore("content", "")
</script>

<h1>svelte-localstorage</h1>
<p>ridiculously simple svelte localstorage component: SvelteKit first, with Svelte support</p>

<input bind:value={$content}>