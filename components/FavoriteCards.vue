<template>
  <div class="ui main container">
    <div class="ui three stackable cards">
      <FavoriteCard :favorite="favorite" :key="favorite.title" v-for="favorite in favorites"/>
    </div>
  </div>
</template>

<script>
import favorites from '~/assets/data/favorites.yml';
import FavoriteCard from '~/components/FavoriteCard.vue';

export default {
  components: {
    FavoriteCard
  },
  data() {
    return {
      favorites
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
