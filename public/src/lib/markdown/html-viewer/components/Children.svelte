<script lang="ts">
  import type hast from "hast";
  import Content from "./Content.svelte";

  export let children: hast.Content[];
</script>

{#each children as child}
  <Content node={child} />
{/each}
