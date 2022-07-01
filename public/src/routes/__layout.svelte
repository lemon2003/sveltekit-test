<script lang="ts">
  import "$styles/global.scss";
  import "$styles/components/icon.scss";
  import "$styles/components/icon-button.scss";
  import "./_layout/style.scss";
</script>

<div class="appRoot">
  <div class="appHeader">
    <div class="appHeader-inner">
      <div class="appHeader-group">
        <a href="/" class="c-icon-button homeLink">
          <span class="c-icon">functions</span>
        </a>
      </div>
      <div class="appHeader-group">
        <a href="/search" class="c-icon-button">
          <span class="c-icon">search</span>
        </a>
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
