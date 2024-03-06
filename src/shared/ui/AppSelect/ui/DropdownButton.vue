<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button :class="['dropdown-button-component', { _disabled: props.isDisabled }]">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
.dropdown-button-component {
  width: 30px;
  height: 30px;
  border: 1px solid $dark50;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  &._disabled {
    cursor: auto;
    opacity: 0.3;
  }
}
</style>
