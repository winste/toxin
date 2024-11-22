<script setup lang="ts">
definePageMeta({
  layout: 'ui-kit',
});
</script>

<template>
  <div class="ui-kit-page">
    <NuxtLink :to="'/colors-and-types'"> colors-and-types </NuxtLink>
    <NuxtLink :to="'/form-elements'"> form-elements </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.ui-kit-page {
  display: flex;
  flex-direction: column;
}
</style>
