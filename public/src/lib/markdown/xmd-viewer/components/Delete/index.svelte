<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Delete;
</script>

<del>
  <Children children={node.children} />
</del>
