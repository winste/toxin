<template>
  <div class="color-and-type container">
    <AppIcon name="logo-colorless" width="48px" height="48px" class="logo" />
    <div class="wrapper">
      <ColorsBlock :colors="ColorsAndType.colors" />
      <TypesBlock :types="ColorsAndType.type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorsAndType from '~/mock/Color-and-type.json'
import ColorsBlock from './ColorsBlock.vue'
import TypesBlock from './TypesBlock.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 37px 150px;
}

.logo {
  padding: 30px;
}
</style>
