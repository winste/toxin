<script setup lang="ts">
defineProps<{
  type: string,
  text: string,
  isDisabled?: boolean,
}>();
</script>

<template>
  <button :class="['button-component', type, { _disabled: isDisabled }]">
    <span v-text="text" />
  </button>
</template>

<style scoped lang="scss">
.button-component {
  &._text {
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-transform: uppercase;
    color: $purple;
    cursor: pointer;
    transition: all .3s;
  }

  &._disabled {
    opacity: .3;
    cursor: auto;
  }

  &:hover {
    opacity: .6;
  }
}
</style>
