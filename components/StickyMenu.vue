<template>
  <div class="ui borderless main tabs menu" style="">
      <div class="ui main container">
        <a class="active item" data-tab="intro">自己紹介</a>
        <a class="item" data-tab="favorites">好きなもの</a>
        <a class="item" data-tab="tools">ツール</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $('.main.menu').visibility({ type: 'fixed' });
    $('.tabs.menu .item').tab();
  }
};
</script>

<style lang="scss" scoped>
.main.menu {
  border: none;
  box-shadow: none;
  margin-top: 0 !important;
}

.main.menu.fixed {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2)
}
</style>
