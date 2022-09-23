<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import Children from "../Children.svelte";

  export let node: xmdast.Paragraph;
</script>

<p>
  <Children children={node.children} />
</p>
