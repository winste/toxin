<template>
  <div class="input">
    <span class="title">
      <label class="label" v-text="props.label"></label>
      <span v-text="props.title"></span>
    </span>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      :class="props.isActive ? 'input-field _active' : 'input-field'"
    />
  </div>
</template>

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
})
</script>

<style scoped lang="scss">
.input {
  max-width: 320px;
}
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

.input-field {
  width: 100%;
  height: 44px;
  padding: 15px 13px;
  border: 1px solid $dark25;
  border-radius: 4px;
  &::placeholder {
    font-family: Montserrat;
    font-size: 14px;
    color: $dark25;
  }
  &:active {
    border: 1px solid $dark50;
  }
  &._active {
    border: 1px solid $dark50;
  }
}
</style>
