<script lang="ts">
  import type hast from "hast";
  import Element from "./Element.svelte";

  export let node: hast.Content;
</script>

{#if node.type === "element"}
  <Element {node} />
{:else if node.type === "text"}
  {node.value}
{:else if node.type === "raw"}
  {@html node.value}
{/if}
