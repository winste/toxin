<script setup lang="ts">
import DropdownList from './DropdownList.vue';

const input = ref<HTMLInputElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);
const dropdownState = ref();

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  list: {
    type: Array,
    default: () => [],
  },
});

const dropdownToggle = (): void => {
  dropdownState.value = !dropdownState.value;
};

const closeOutside = (event: Event): void => {
  const element = event.target as HTMLElement;

  if (!dropdown.value?.contains(element)) dropdownState.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOutside);
});
</script>

<template>
  <div ref="dropdown" class="dropdown">
    <div
      id=""
      ref="input"
      class="input"
      :class="{ _active: dropdownState }"
      @click="dropdownToggle"
    >
      <div>
        {{ props.placeholder }}
      </div>
    </div>

    <DropdownList :is-open="dropdownState" />
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  max-width: 320px;
}

.input {
  position: relative;
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 1px solid $dark25;
  border-radius: 4px;
  appearance: none;
  background-color: transparent;
  color: $dark75;
  cursor: pointer;
  font-size: 14px;

  &._active {
    border: 1px solid $dark50;
    border-radius: 4px 4px 0 0;
  }
}
</style>
