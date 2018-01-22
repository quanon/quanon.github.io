<template>
  <div class="ui card">
    <div class="content">
      <div class="header">{{ favorite.title }}</div>
      <div class="description">
        <div class="ui small feed">
          <div class="event" v-for="item in favorite.items">
            <div class="label" :class="{ square: item.squareLabel }">
              <!-- https://github.com/nuxt/nuxt.js/issues/448 -->
              <img :src="item.image">
            </div>
            <div class="content">
              <template v-if="item.date">
                <div class="date">
                  {{ item.date }}
                </div>
                <div class="summary">
                  {{ item.title }}
                </div>
              </template>
              <template v-else>
                <div class="summary">
                  <div class="user">
                    {{ item.title }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorite: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.square.label > img {
  border-radius: 0 !important;
}
</style>
