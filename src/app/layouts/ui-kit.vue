<template>
  <div class="ui-kit-layout">
    <header>
      <Icon name="icon:logo-colorless" size="48px"/>
    </header>
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.ui-kit-layout {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  padding: 30px;

  .container {
    width: 100%;
    max-width: 1159px;
    margin: 0 auto;
  }
}
</style>
