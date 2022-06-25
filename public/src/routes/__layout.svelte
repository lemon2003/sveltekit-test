<script lang="ts">
  import "$styles/global.scss";
  import "./_layout/style.scss";
</script>

<div class="appRoot">
  <div class="appHeader">
    <div class="appHeader-inner">
      <div class="appHeader-group">
        <a href="/"><span>top page</span></a>
      </div>
      <div class="appHeader-group">
        <a href="/search"><span>search</span></a>
      </div>
    </div>
  </div>

  <div class="appBody">
    <slot />
  </div>

  <div class="appFooter">
    <div class="appFooter-inner" />
  </div>
</div>
