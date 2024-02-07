<template>
  <div>
    <p>
      {{ props.name }}
    </p>
    <DropdownButtons ref="guestsCount" @change-count="showCount"/>
  </div>
</template>

<script setup lang="ts">
import DropdownButtons from './DropdownButtons.vue';

const guestsCount = ref<HTMLElement | null>(null)

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
})

const showCount = (e) => {
  guestsCount.value = e;
}

const emit = defineEmits(['changeGuest'])

watch(() => guestsCount.value, (newValue) => {
  emit('changeGuest', {
    count: guestsCount.value || newValue,
    name: props.name
  })
})
</script>

<style scoped lang="scss">

</style>