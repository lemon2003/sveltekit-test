<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Strong;
</script>

<strong>
  <Children children={node.children} />
</strong>
