<template>
  <section class="container">
    <NameHeader/>
    <StickyMenu/>
    <div class="ui tab active" data-tab="intro">
      <Intro/>
    </div>
    <div class="ui tab" data-tab="favorites">
      <FavoriteCards/>
    </div>
    <div class="ui tab" data-tab="tools">
      <Tools/>
    </div>
  </section>
</template>

<script>
import NameHeader from '~/components/NameHeader.vue';
import StickyMenu from '~/components/StickyMenu.vue';
import Intro from '~/components/Intro.vue';
import FavoriteCards from '~/components/FavoriteCards.vue';
import Tools from '~/components/Tools.vue';

export default {
  components: {
    NameHeader,
    StickyMenu,
    Intro,
    FavoriteCards,
    Tools
  }
};
</script>

<style lang="scss" scoped>
.main.container {
  margin-top: 2.0rem;
  margin-bottom: 2.0rem;
}
</style>
