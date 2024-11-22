<script setup lang="ts">
defineProps<{
  type: string,
  placeholder: string,
  modelValue: string,
  isActive?: boolean,
}>();

const value = defineModel<string>();
</script>

<template>
  <div class="input-component">
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :class="['base-input', { _active: isActive }]"
    />
    <slot class="icon" />
  </div>
</template>

<style scoped lang="scss">
.input-component {
  &._active {
    border: 1px solid $dark50;
  }
}
</style>
