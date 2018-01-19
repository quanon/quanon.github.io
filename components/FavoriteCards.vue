<template>
  <div class="ui main container">
    <div class="ui three stackable cards">
      <div class="ui card" v-for="favorite in favorites">
        <div class="content">
          <div class="header">{{ favorite.title }}</div>
          <div class="description">
            <div class="ui list" v-if="favorite.type === 'simple'">
              <div class="item" v-for="item in favorite.items">{{ item }}</div>
            </div>
            <div class="ui feed" v-else-if="favorite.type === 'feed'">
              <div class="event" v-for="item in favorite.items">
                <div class="label">
                  <!-- https://github.com/nuxt/nuxt.js/issues/448 -->
                  <img :src="item.image">
                </div>
                <div class="content">
                  <div class="date">
                    {{ item.date }}
                  </div>
                  <div class="summary">
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
