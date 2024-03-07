<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  isReadonly: {
    type: Boolean,
    default: false,
  }, 
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="app-input-view">
    <input
      :readonly="props.isReadonly"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      :class="['app-input field', 
      { ' _active': props.isActive },
      { ' _readonly': props.isReadonly }
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.field {

  &._active {
    border: 1px solid $dark50;
  }

  &._readonly {
    cursor: pointer;

    &:focus-visible {
      border-radius: 0 4px;
    }
    
  }
}
</style>
