<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";

  export let node: xmdast.RawHTML;
</script>

{@html node.value}
