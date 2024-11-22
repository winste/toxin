<script setup lang="ts">
import { BaseButton } from '~/shared/ui/BaseButton';
import { InputDropdown, DropdownField } from '~/shared/ui/InputDropdown';
import { useGuestsStore } from '../model/store';
import { pluralizeGuests } from '../libs/pluralizeGuests';

const guestsStore = useGuestsStore();
const pluralizeGuestsValue = computed(() => pluralizeGuests(guestsStore.guestsCount, guestsStore.babiesCount as number));
</script>

<template>
  <InputDropdown class="select-guests-component" :value="guestsStore.isNotEmpty ? pluralizeGuestsValue : 'Сколько гостей'">
    <div class="guests">
      <DropdownField
        v-for="(guests, index) in guestsStore.guests"
        :key="index"
        :name="guests.name"
        :count="guests.count"
        :minus-is-disabled="guestsStore.isLowerLimit(guests.key)"
        :plus-is-disabled="guestsStore.isUpperLimit(guests.key)"
        @increase="guestsStore.increaseGuests(guests.key)"
        @decrease="guestsStore.decreaseGuests(guests.key)"
      />
    </div>
    <div class="controls">
      <BaseButton
        v-show="guestsStore.isNotEmpty"
        :type="'_text'"
        :text="'Очистить'"
        @click="guestsStore.resetGuests"
      />
      <BaseButton
        :type="'_text'"
        :text="'Применить'"
        class="btn-apply"
      />
    </div>
  </InputDropdown>
</template>

<style scoped lang="scss">
.select-guests-component {
  .guests {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 20px;
  }
  .field {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }

  .count {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .value {
    width: 15px;
    text-align: center;
  }

  .controls {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }

  .btn-apply {
    grid-column: 2;
    justify-self: end;
  }
}
</style>
