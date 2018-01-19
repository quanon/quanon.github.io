<template>
  <div class="ui card">
    <div class="content">
      <div class="header">{{ favorite.title }}</div>
      <div class="description">
        <div class="ui list" v-if="favorite.type === 'simple'">
          <div class="item" v-for="item in favorite.items">{{ item }}</div>
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
</style>
