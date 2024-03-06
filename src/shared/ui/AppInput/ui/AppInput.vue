<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="app-input">
    <span class="title">
      <label class="label" v-text="props.label" />
      <span v-text="props.title" />
    </span>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      :class="[ 'field', {' _active' : props.isActive} ]"
    >
  </div>
</template>

<style scoped lang="scss">
.app-input {
  max-width: 320px;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 12px;
    text-transform: uppercase;
  }

  .label {
    font-weight: 700;
  }

  .field {
    width: 100%;
    height: 44px;
    padding: 15px 13px;
    border: 1px solid $dark25;
    border-radius: 4px;

    &::placeholder {
      color: $dark25;
      font-size: 14px;
    }

    &:active,
    &._active {
      border: 1px solid $dark50;
    }
  }
}
</style>
