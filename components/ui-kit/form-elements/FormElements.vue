<template>
  <div>
    <AppIcon name="logo-colorless" width="48px" height="48px" class="logo" />
    <AppInput
      v-for="item in FormElements.input"
      :key="item.title"
      :type="item.type"
      :label="item.label"
      :placeholder="item.placeholder"
      :value="item.value"
      :title="item.title"
      :is-active="item.isActive"
    />
    <SelectInput
      :title="FormElements.select.title"
      :fields="FormElements.select.fields"
    />
  </div>
</template>

<script setup lang="ts">
import AppInput from 'global/AppInput.vue'
import SelectInput from './components/SelectInput.vue'
import FormElements from '~/mock/Form-elements.json'
</script>
