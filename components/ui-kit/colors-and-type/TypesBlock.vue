<template>
  <div class="types">
    <div v-for="item in props.types" :key="item.text" class="type">
      <span
        class="subtitle"
        :style="{ 'font-size': `${item.size}` }"
        v-text="item.name"
      ></span>
      <!-- eslint-disable vue/no-v-html -->
      <span class="preview" v-html="item.text"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  types: {
    type: Object,
    default: () => {},
  },
})
</script>

<style scoped>
.types {
  display: flex;
  flex-direction: column;
  gap: 51px;
}
.type {
  display: flex;
  gap: 30px;
}

.subtitle {
  width: 50px;
  color: rgba(31, 32, 65, 0.25);
  text-align: end;
}

.preview {
  max-width: 370px;
}
</style>
