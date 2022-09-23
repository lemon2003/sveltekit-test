<script lang="ts">
  import type hast from "hast";
  import Children from "./Children.svelte";

  export let node: hast.Root;
</script>

<Children children={node.children} />
