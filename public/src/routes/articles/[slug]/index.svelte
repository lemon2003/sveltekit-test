<script lang="ts">
  import "$styles/components/icon.scss";
  import "./style.scss";

  const article = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, soluta.",
    date: "2020-01-01"
  };
</script>

<div class="articleWrapper">
  <div class="articleBody">
    <header class="articleHeader">
      <h1 class="articleTitle">{article.title}</h1>
      <ul class="articleMeta">
        <li class="articleMeta__item"><span class="c-icon">history</span>{article.date}</li>
      </ul>
    </header>
    <main class="articleMain">
      <article class="articleContent">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, reiciendis.
        Aliquam, accusamus laborum. Quam porro repellendus, quibusdam magnam sed accusantium.
        Debitis voluptates culpa, sunt quaerat ea rem harum in nihil!
        Quae assumenda omnis qui aliquam commodi expedita facilis beatae minus.
        Corporis, id voluptate sint ipsam ad eos laboriosam aperiam ut.
        Nobis aliquid officia libero iusto. Autem possimus nesciunt asperiores quas.
        Inventore blanditiis eligendi repellat in exercitationem quo rem, temporibus minima.
        Accusantium vel officia, numquam velit praesentium iure fugit quisquam similique?
        Magni obcaecati placeat, vel praesentium numquamhic dolor ipsum aperiam.
        Porro consequatur nobis dicta voluptatibus omnis atque consequuntur est itaque?
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
