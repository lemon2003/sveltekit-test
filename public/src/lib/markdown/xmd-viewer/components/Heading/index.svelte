<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Heading;
</script>

<svelte:element this={`h${node.depth}`} id={node.anchor}>
  <Children children={node.children} />
</svelte:element>
