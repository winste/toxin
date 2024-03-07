<template>
  <div class="app-icon">
    <svg-icon
      ref="icon"
      :name="props.name"
      :width="props.width"
      :height="props.height"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '100%',
  },
  height: {
    type: [String, Number],
    default: '100%',
  },
})
</script>

<style lang="scss" scoped>
.app-icon {
  background-color: transparent;
}
</style>
