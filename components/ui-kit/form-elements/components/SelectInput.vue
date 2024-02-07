<template>
  <div ref="dropdown" class="dropdown">
    <div
      id=""
      ref="input"
      class="input"
      :class="{ _active: dropdownState }"
      @click="dropdownToggle"
    >
      <div v-if="!isEmpty">{{ list }}</div>
      <div v-else>{{ props.fields.placeholder }}</div>
      <app-icon
        ref="icon"
        name="dropdown"
        width="12px"
        height="12px"
        class="icon"
      />
    </div>

    <DropdownList ref="droplist" :is-open="dropdownState" :fields="props.fields.list" @change-guests="showMethod" />
  </div>
</template>

<script setup lang="ts">
import DropdownList from './DropdownList.vue';

const droplist = ref<HTMLElement | null>(null)
const input = ref<HTMLInputElement | null>(null)
const dropdown = ref<HTMLElement | null>(null)
const dropdownState = ref<Boolean>(false)

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  fields: {
    type: Object,
    default: () => {},
  },
})

const dropdownToggle = (): void => {
  dropdownState.value = !dropdownState.value
}

const closeOutside = (event: Event): void => {
  const element = event.target as HTMLElement

  if (!dropdown.value?.contains(element)) {
    dropdownState.value = false
  }
}

const list = ref();
const isEmpty = ref(true);

const showMethod = (e: object) => {
  const isHasGuests = Object.values(e).some(num => num > 0)

  if (isHasGuests) isEmpty.value = false
  else isEmpty.value = true
  
  list.value = e
}

onMounted(() => {
  document.addEventListener('click', closeOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOutside)
})
</script>

<style scoped lang="scss">
.dropdown {
  max-width: 320px;
}

.input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  border: 1px solid $dark25;
  border-radius: 4px;
  background-color: transparent;
  color: $dark75;
  font-family: Montserrat;
  font-size: 14px;
  appearance: none;
  cursor: pointer;

  &._active {
    border: 1px solid $dark50;
    border-radius: 4px 4px 0 0;
  }
}



</style>
