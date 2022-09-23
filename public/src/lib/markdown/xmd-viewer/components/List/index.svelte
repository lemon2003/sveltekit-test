<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.List;
</script>

{#if node.ordered}
  <ol start={node.start}>
    <Children children={node.children} />
  </ol>
{:else}
  <ul>
    <Children children={node.children} />
  </ul>
{/if}
