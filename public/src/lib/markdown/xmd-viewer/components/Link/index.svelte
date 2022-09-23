<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Link;
</script>

<a href={node.url} title={node.title}>
  <Children children={node.children} />
</a>
