<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Table;
</script>

<table>
  <Children children={node.children} />
</table>
