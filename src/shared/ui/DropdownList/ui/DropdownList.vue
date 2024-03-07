<script setup lang="ts">
interface IItem {
  name: string;
  count: number;
}

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array as PropType<IItem[]>,
    default: () => [],
  },
});
</script>

<template>
  <div :class="['droplist-component', { _active: props.isOpen }]">
    <div v-for="(item, index) in list" :key="index" class="field">
      <span>
        {{ item.name }}
      </span>

      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.droplist-component {
  position: absolute;
  display: flex;
  gap: 7px;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  padding: 7px 7px 15px 15px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 10px 20px $dark5;
  opacity: 0;
  transition: all 0.1s ease-out;
  visibility: hidden;

  &._active {
    border: 1px solid $dark50;
    border-top: none;
    opacity: 1;
    transition: all 0.1s ease-out;
    visibility: visible;
  }
}
</style>
