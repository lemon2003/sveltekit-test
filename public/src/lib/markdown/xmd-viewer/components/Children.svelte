<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Content from "./Content.svelte";

  export let children: xmdast.Content[];
</script>

{#each children as child}
  <Content node={child} />
{/each}
