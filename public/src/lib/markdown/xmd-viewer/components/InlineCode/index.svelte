<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";

  export let node: xmdast.InlineCode;
</script>

<code>
  {node.value}
</code>
