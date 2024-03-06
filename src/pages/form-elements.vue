<script setup lang="ts">
import { AppInput } from '~/shared/';
import SetGuestsInput from '~/features/set-guests/ui/SetGuestsInput.vue';

const fields = {
  placeholder: 'Сколько гостей',
  list: ['Взрослые', 'Дети', 'Младенцы'],
};
</script>

<template>
  <div>
    <AppInput
      type="email"
      placeholder="email"
      value=""
    />
    <AppInput
      type="email"
      placeholder="text"
      value="This is pretty awesome"
      :is-active="true"
      :fields="fields"
    />
    <SetGuestsInput />
  </div>
</template>
