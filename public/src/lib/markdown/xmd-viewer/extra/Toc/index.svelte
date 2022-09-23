<script lang="ts">
  import type { TocItem } from "$lib/markdown/xmdast-context";

  export let toc: TocItem[];
</script>

<ul>
  {#each toc as item}
    <li><a href={`#${item.anchor}`}>{item.text}</a></li>
  {/each}
</ul>
