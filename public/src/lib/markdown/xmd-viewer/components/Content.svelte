<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import { switchComponent } from "../switchComponent";

  export let node: xmdast.Content;
</script>

<svelte:component this={switchComponent(node)} {node} />
