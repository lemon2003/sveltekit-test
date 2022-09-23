<script lang="ts">
  import "$styles/components/icon.scss";
  import "./style.scss";
  import XmdViewer from "$lib/markdown/xmd-viewer/index.svelte";
  import Toc from "$lib/markdown/xmd-viewer/extra/Toc/index.svelte";

  export let data: import("./$types").PageData;
</script>

<div class="articleWrapper">
  <div class="articleBody">
    <header class="articleHeader">
      <h1 class="articleTitle">
        {data.meta.title}
      </h1>
      <ul class="articleMeta">
        <li class="articleMeta__item">
          <span class="c-icon">history</span>Last Updated: {data.meta.updated}
        </li>
      </ul>
    </header>
    <main class="articleMain">
      <article class="content">
        <XmdViewer rootNode={data.content} />
      </article>
    </main>
  </div>
  <aside class="articleSidebar">
    <nav>
      <Toc toc={data.content.exported.toc} />
    </nav>
  </aside>
</div>
