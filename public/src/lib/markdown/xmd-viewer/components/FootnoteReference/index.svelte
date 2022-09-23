<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";

  export let node: xmdast.FootnoteReference;
</script>

<a href={`#${node.defAnchor}`} id={node.refAnchor}>{node.label}</a>

