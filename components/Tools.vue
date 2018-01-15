<template>
  <div class="ui main container">
    <h3 class="ui header">
      <a href="https://quanon.github.io/counter/">🔢 カウンタ</a>
    </h3>
    <p>数を数えます。</p>
  </div>
</template>

<script>
import favorites from '~/assets/data/favorites.yml';

export default {
  data() {
    return {
      favorites
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
