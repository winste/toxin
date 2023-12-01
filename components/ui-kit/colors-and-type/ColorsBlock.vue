<template>
  <div class="colors">
    <div v-for="item in props.colors" :key="item.name" class="color-wrap">
      <span :class="['color', `${item.class}`]"></span>
      <span class="detail">
        <h2 v-text="item.name"></h2>
        <p class="name" v-text="item.code"></p>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  colors: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.color-wrap {
  display: flex;
  gap: 40px;
}

.color {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 6px;
  &-first {
    background-color: $dark;
  }
  &-second {
    background-color: $dark75;
  }
  &-third {
    background-color: $dark50;
  }
  &-fourth {
    background-color: $dark25;
  }
  &-fifth {
    background-color: $dark5;
  }
  &-sixth {
    background-color: $purple;
  }
  &-seventh {
    background-color: $green;
  }
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 19px;
  text-transform: uppercase;
}
</style>
