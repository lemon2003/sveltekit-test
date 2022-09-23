<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.TableCell;
</script>

<td>
  <Children children={node.children} />
</td>
