<script setup lang="ts">
definePageMeta({
  layout: 'ui-kit',
});

const colors = [
  {
    "name": "Dark Shade 100%",
    "code": "#1F2041",
    "hex": "#1F2041"
  },
  {
    "name": "Dark Shade 75%",
    "code": "#1F2041",
    "hex": "#1F2041BF"
  },
  {
    "name": "Dark Shade 50%",
    "code": "#1F2041",
    "hex": "#1F204180"
  },
  {
    "name": "Dark Shade 25%",
    "code": "#1F2041",
    "hex": "#1F204140"
  },
  {
    "name": "Dark Shade 5%",
    "code": "#1F2041",
    "hex": "#1F20410D"
  },
  {
    "name": "Purple ",
    "code": "#BC9CFF",
    "hex": "#BC9CFF"
  },
  {
    "name": "Green",
    "code": "#6FCF97",
    "hex": "#6FCF97"
  }
];

const types = [
  {
    "name": "H1",
    "tag": "h1",
    "text": "This one is the sub-section or widget title",
  },
  {
    "name": "H2",
    "tag": "h2",
    "text": "Next one is the item title inside widgets",
  },
  {
    "name": "H3",
    "tag": "h3",
    "text": "This is a label or CTA text",
  },
  {
    "name": "Body",
    "tag": "p",
    "text": "This is the body text which is used for most of the design, like paragraphs, lists, etc.",
  }
];
</script>

<template>
  <div class="colors-and-types">
    <ul class="colors">
      <li
        v-for="color in colors"
        :key="color.code"
        class="color"
      >
        <span class="preview" :style="{ background: color.hex }" ></span>
        <h2 v-text="color.name" />
        <span class="code" v-text="color.code" />
      </li>
    </ul>
    <ul class="types">
      <li
        v-for="type in types"
        :key="type.tag"
        class="type"
      >
        <component :is="type.tag" class="name">
          {{ type.name }}
        </component>
        <component :is="type.tag">
          {{ type.text }}
        </component>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.colors-and-types {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  padding: 65px 0;

  .color {
    display: grid;
    grid-template-columns: 70px 180px;
    column-gap: 40px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .preview {
    display: inline-block;
    width: 70px;
    height: 70px;
    grid-row: span 2;
    border-radius: 12px;
  }

  .code {
    font-size: 19px;
    font-weight: 400;
    line-height: 28px;
  }

  .types {
    max-width: 436px;
  }

  .type {
    display: flex;
    gap: 30px;

    &:not(:last-child) {
      margin-bottom: 51px;
    }
  }

  .name {
    min-width: 37px;
    text-align: right;
    font-weight: 300;
    color: $dark25;
  }
}
</style>