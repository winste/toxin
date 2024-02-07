
<template>
  <div 
    ref="droplist" 
    :class="['droplist', { _active: isOpen }]"
  >
    {{ guestsList }}
    <div
      v-for="(name, index) in props.fields"
      :key="index"
    >
      <DropdownListItem :name="name" class="field" @change-guest="showCount"/>
    </div>
    <div class="buttons">
      <button class="button clear">Очистить</button>
      <button class="button apply">Применить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import DropdownListItem from './DropdownListItem.vue';

const props = defineProps({
  fields: {
    type: Object,
    default: () => {},
  },
  isOpen: {
    type: Boolean,
    default: false,
  }
})

const guestsList = ref()

interface IGuest {
  name: string,
  count: number
}

const showCount = (e: IGuest) => {
  guestsList.value = {
    "Взрослые": 0,
    "Дети": 0,
    "Младенцы": 0,
  }
  const { name } = e;

  guestsList.value[name] = e.count
}

const emit = defineEmits(['changeGuests'])

watch(() => guestsList.value, () => {
  emit('changeGuests', guestsList.value)
})

</script>

<style scoped lang="scss">

.droplist {
  position: absolute;
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 7px 7px 15px 15px;
  transition: all 0.1s ease-out;
  box-shadow: 0px 10px 20px $dark5;
  border-radius: 0 0 4px 4px;
  visibility: hidden;
  opacity: 0;

  &._active {
    border: 1px solid $dark50;
    border-top: none;
    transition: all 0.1s ease-out;
    visibility: visible;
    opacity: 1;
  }
}

.field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>