<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import HtmlViewer from "$lib/markdown/html-viewer/index.svelte";

  export let node: xmdast.ParsedHTML;
</script>

<HtmlViewer rootNode={node.hast} />
