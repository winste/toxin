<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
});
</script>

<template>
  <div class="error-page">
    <div class="app-container error-container">
      <h3 class="error-message">
        {{ props.error.message }}
      </h3>
      <div class="desc">
        Вы перешли по неправильной ссылке или страница была удалена.
      </div>
      <NuxtLink to="/" class="default-button link">
        Перейти на главную
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 1fr;
}
</style>
