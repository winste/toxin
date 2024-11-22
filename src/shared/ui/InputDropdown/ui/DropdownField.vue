<script setup lang="ts">
defineProps<{
  name: string,
  count: number,
  minusIsDisabled: boolean,
  plusIsDisabled: boolean,
}>();

const emit = defineEmits(['decrease', 'increase']);

const handleClick = (name: 'decrease' | 'increase'): void => {
  emit(name);
};
</script>

<template>
  <div class="dropdown-field">
    <span v-text="name" />
    <div class="count">
      <button
        :class="['button', { _disabled: minusIsDisabled }]"
        @click="handleClick('decrease')"
        v-text="'-'"
      />
      <span class="value" v-text="count" />
      <button
        :class="['button', { _disabled: plusIsDisabled }]"
        @click="handleClick('increase')"
        v-text="'+'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-field {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .count {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .value {
    width: 15px;
    text-align: center;
  }

  .button {
    width: 30px;
    height: 30px;
    border: 1px solid $dark50;
    border-radius: 50%;
    background-color: transparent;
    font-size: 18px;
    line-height: 22px;
    color: $dark50;
    cursor: pointer;
    transition: all .2s;

    &._disabled {
      opacity: .3;
      cursor: auto;
    }
  }
}
</style>
