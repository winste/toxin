<template>
  <div class="dropdown-buttons">
    <button
      ref="button"
      :class="['button', buttonClassName]"
      @click="decreaseValue"
    >
      -
    </button>
    <span class="count">{{ count }}</span>
    <button class="button button-minus" @click="increaseValue">+</button>
  </div>
</template>

<script setup lang="ts">
const count = ref<number>(0)
const button = ref<HTMLButtonElement | null>(null)

const increaseValue = (): void => {
  count.value += 1
}

const decreaseValue = (): void => {
  if (count.value > 0) {
    count.value -= 1
  }
}

const buttonClassName = computed(() => (count.value === 0 ? '_disabled' : ''))

const emit = defineEmits(['changeCount'])

watch(() => count.value, (newValue) => {
  emit('changeCount', newValue)
})
</script>

<style scoped lang="scss">
.button {
  width: 30px;
  height: 30px;
  border: 1px solid $dark50;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &._disabled {
    opacity: 0.3;
    cursor: auto;
  }
}

.count {
  display: inline-block;
  width: 20px;
  margin: 0 5px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
}
</style>
