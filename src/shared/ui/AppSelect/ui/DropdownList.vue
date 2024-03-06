<script setup lang="ts">
import DropdownButton from './DropdownButton.vue';

const countGuests = ref();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <ClientOnly>
    <div
      :class="['droplist-component', { _active: props.isOpen }]"
    >
      <div v-for="(item, index) in countGuests" :key="index" class="field">
        <div>
          {{ item.name }}
        </div>

        <div class="buttons">
          <DropdownButton
            text="-"
            :is-disabled="!item.value"
          />
          <span class="count">
            {{ item.value }}
          </span>
          <DropdownButton
            text="+"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.droplist-component {
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 320px;
  flex-direction: column;
  padding: 7px 7px 15px 15px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 10px 20px $dark5;
  gap: 7px;
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

  .controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &._noEmpty {
      justify-content: space-between;
    }
  }

  .button {
    color: $purple;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .count {
    display: inline-block;
    width: 20px;
    margin: 0 5px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
}
</style>
