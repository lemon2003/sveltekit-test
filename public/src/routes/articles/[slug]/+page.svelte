<script lang="ts">
  import "$styles/components/icon.scss";
  import "./style.scss";

  export let meta: any;
  export let content: any;
</script>

<div class="articleWrapper">
  <div class="articleBody">
    <header class="articleHeader">
      <h1 class="articleTitle">
        {meta.title}
      </h1>
      <ul class="articleMeta">
        <li class="articleMeta__item">
          <span class="c-icon">history</span>Last Updated: {meta.updated}
        </li>
      </ul>
    </header>
    <main class="articleMain">
      <article class="content">
        {content}
      </article>
    </main>
  </div>
  <aside class="articleSidebar">
    <nav>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Iusto, corporis quidem!</li>
        <li>Hic, sequi sint.</li>
        <li>Numquam, libero beatae!</li>
        <li>Exercitationem, nesciunt ipsum.</li>
        <li>Excepturi, quisquam voluptates.</li>
        <li>Facere, laborum placeat.</li>
        <li>Illo, corrupti enim.</li>
        <li>Consectetur, vel quam.</li>
        <li>In, temporibus optio?</li>
      </ul>
    </nav>
  </aside>
</div>
