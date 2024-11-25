<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

defineProps<{
  value: string,
}>();

const dropdown = ref<HTMLElement | null>(null);
const input = ref<HTMLElement | null>(null);
const dropdownState = ref<boolean>(false);

const handleClickInput = (): void => {
  dropdownState.value = !dropdownState.value;
};

const closeDropdown = (): void => {
  dropdownState.value = false;
};

onClickOutside(dropdown, () => {
  closeDropdown();
}, { ignore: [input] });

const activeClass = computed(() => ( { _active: dropdownState.value } ));
</script>

<template>
  <div class="input-dropdown">
    <div class="field" @click="handleClickInput">
      <input
        ref="input"
        :value="value"
        :class="['base-input', activeClass]"
        type="text"
        readonly
      />
      <Icon name="icon:arrow" :class="['icon', activeClass]"/>
    </div>
    <div ref="dropdown" :class="['dropdown', activeClass]">
      <slot :close="closeDropdown" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-dropdown {
  position: relative;

  .field,
  .base-input {
    cursor: pointer;
  }

  .base-input {
    &._active {
      border: 1px solid $dark50;
      border-radius: 4px 4px 0 0;
    }
  }

  .dropdown {
    position: absolute;
    width: 100%;
    padding: 7px 7px 15px 15px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 10px 20px $dark5;
    opacity: 0;
    transition: all 0.2s ease-out;
    visibility: hidden;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid $dark50;
    border-top: none;

    &._active {
      opacity: 1;
      transition: all 0.1s ease-out;
      visibility: visible;
    }
  }

  ::v-deep(.icon) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 13px;
    margin: auto;
    width: 15px;
    transition: all .3s;

    &._active {
      transform: rotate(180deg);
    }
  }
}
</style>
