<script lang="ts">
  import type hast from "hast";
  import Root from "./components/Root.svelte";

  export let rootNode: hast.Root;
</script>

<Root node={rootNode} />
