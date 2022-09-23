<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";

  export let node: xmdast.Image;
</script>

<img src={node.url} title={node.title} alt={node.alt} />
