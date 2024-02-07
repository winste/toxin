<template>
  <div>
    <div class="title">
      <label class="label" v-text="props.label" />

      <span v-if="props.title" v-text="props.title" />
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="sccs">
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 12px;
  text-transform: uppercase;
}

.label {
  font-weight: 700;
}
</style>
