<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.value"
    :class="['app-input field', { ' _active': props.isActive }]"
  />
</template>

<style scoped lang="scss">
.field {
  &._active {
    border: 1px solid $dark50;
  }
}
</style>
