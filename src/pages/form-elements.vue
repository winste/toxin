<script setup lang="ts">
import { BaseInput } from '~/shared/ui/BaseInput';
import { SelectGuests } from '~/features/select-guests';

const emailInput = ref('');
const textInput = ref('This is pretty awesome');

definePageMeta({
  layout: 'ui-kit',
});
</script>

<template>
  <div>
    <div class="inputs">
      <div class="input">
        <div class="heading">
          <h3>text field</h3>
          <span>default</span>
        </div>
        <BaseInput
          v-model="emailInput"
          type="email"
          placeholder="email"
        />
      </div>
      <BaseInput
        v-model="textInput"
        type="text"
        placeholder="text"
        :is-active="true"
      />
      <SelectGuests />
    </div>
  </div>
</template>

<style lang="scss">
.inputs {
  max-width: 320px;
}
</style>
