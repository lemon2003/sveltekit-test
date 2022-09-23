<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import "katex/dist/katex.min.css"

  export let node: xmdast.InlineMath;
</script>

{@html node.value}
