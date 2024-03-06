<script setup lang="ts">
import { AppSelect } from '~/shared/';
import listData from '../mock/list.data';
</script>

<template> 
  {{ listData }}
  <AppSelect
    v-bind="listData"
  />
</template>
