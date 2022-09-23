<script lang="ts">
  import type xmdast from "$lib/markdown/xmdast";
  import "prismjs/themes/prism.min.css";

  export let node: xmdast.Code;

  const languageClassName = node.lang ? `language-${node.lang}` : "";
</script>

<pre class={languageClassName}>
  <code class={languageClassName}>
    {@html node.value}
  </code>
</pre>
