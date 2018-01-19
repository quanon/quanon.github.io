<template>
  <FavoriteSimpleCard :favorite="favorite" v-if="favorite.type === 'simple'"/>
  <FavoriteFeedCard :favorite="favorite" v-else-if="favorite.type === 'feed'"/>
</template>

<script>
import FavoriteSimpleCard from '~/components/FavoriteSimpleCard.vue';
import FavoriteFeedCard from '~/components/FavoriteFeedCard.vue';

export default {
  props: {
    favorite: {
      type: Object,
      required: true
    }
  },
  components: {
    FavoriteSimpleCard,
    FavoriteFeedCard
  }
};
</script>

<style lang="scss" scoped>
</style>
