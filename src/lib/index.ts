import { writable, type Writable } from "svelte/store";
import { onMount } from "svelte";

export function localStore(key: string, initialValue: string): Writable<string> {
  const { subscribe, set, update } = writable(initialValue);

  onMount(() => {
    const value = localStorage.getItem(key);
    if (!value) return;
    set(value);
  })

  return {
    subscribe,
    update,
    set: (value: string) => {
        globalThis["localStorage"] && localStorage.setItem(key, value);
        set(value)
    }
  }
}