<script setup lang="ts">
import { AppInput, AppSelect } from '~/shared/';

const fields = {
  placeholder: 'Сколько гостей',
  list: ['Взрослые', 'Дети', 'Младенцы'],
};
</script>

<template>
  <div>
    <AppInput
      type="email"
      label="text field"
      title="default"
      placeholder="email"
      value=""
      :is-active="false"
    />
    <AppSelect
      title="dropdown"
      :fields="fields"
    />
  </div>
</template>
