<script setup lang="ts">
import { AppInput } from '~/shared/';
import SelectGuests from '~/features/select-guests/ui/SelectGuests.vue';
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
    />
    <SelectGuests />
  </div>
</template>
