<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Root from "./components/Root.svelte";
  import FootnoteDefinitionViewer from "./extra/FootnoteDefinitionViewer/index.svelte";

  export let rootNode: xmdast.Root;
</script>

<Root node={rootNode} />

{#if rootNode.exported}
  <FootnoteDefinitionViewer exported={rootNode.exported} />
{/if}