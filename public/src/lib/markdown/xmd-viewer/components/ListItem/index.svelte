<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.ListItem;
</script>

<li>
  <Children children={node.children} />
</li>
