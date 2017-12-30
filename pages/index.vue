<template>
  <section class="container">
    <name-header/>
    <sticky-menu/>
    <div class="ui tab active" data-tab="intro">
      <intro/>
    </div>
    <div class="ui tab" data-tab="favorites">
      <favorites/>
    </div>
  </section>
</template>

<script>
import Favorites from '~/components/Favorites.vue';
import Intro from '~/components/Intro.vue';
import NameHeader from '~/components/NameHeader.vue';
import StickyMenu from '~/components/StickyMenu.vue';

export default {
  components: {
    Favorites,
    Intro,
    NameHeader,
    StickyMenu
  }
};
</script>

<style lang="scss" scoped>
.main.container {
  margin-top: 2.0rem;
  margin-bottom: 2.0rem;
}
</style>
