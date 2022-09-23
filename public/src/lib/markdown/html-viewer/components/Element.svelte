<script lang="ts">
  import Children from "./Children.svelte";
  import type hast from "hast";
  import Root from "./Root.svelte";

  export let node: hast.Element;
</script>

{#if node.tagName === "template"}
  <template>
    {#if node.content}
      <Root node={node.content} {...node.properties} />
    {/if}
  </template>
{:else}
  <svelte:element this={node.tagName} {...node.properties}>
    <Children children={node.children} />
  </svelte:element>
{/if}
