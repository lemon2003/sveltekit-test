<script lang="ts">
  import type { ExportedContext } from "$lib/markdown/xmdast-context";
  import Children from "../../components/Children.svelte";

  export let exported: ExportedContext;
  const { footnoteDefinitions } = exported;
</script>

{#if footnoteDefinitions?.length}
  <hr />
  <ul>
    {#each footnoteDefinitions as item}
      <li id={item.defAnchor}>
        <Children children={item.children} />
        <a href={`#${item.refAnchor}`}>↩</a>
      </li>
    {/each}
  </ul>
{/if}
