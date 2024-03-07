<script setup lang="ts">
import AppInput from '~/shared/ui/AppInput/ui/AppInput.vue';
import DropdownList from '~/shared/ui/DropdownList/ui/DropdownList.vue';
import listData from '../mock/list.data';

const dropdown = ref<HTMLElement | null>(null);
const dropdownState = ref();

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
  <div class="select-guests-component">
    <AppInput
      class="input"
      readonly
      :value="listData.placeholder"
      @click="dropdownToggle"
    />
    <DropdownList
      ref="dropdown"
      :is-open="dropdownState"
      :list="listData.list"
    />
  </div>
</template>

<style scoped lang="scss">
.select-guests-component{

  .input {
    cursor: pointer;
  }
}
</style>
