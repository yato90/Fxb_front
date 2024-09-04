<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  iconName: string
  alt?: string
}>()

// Формируем путь к иконке с использованием функции new URL и import.meta.url
const iconSrc = computed(
  () => new URL(`../../assets/icons/${props.iconName}.svg`, import.meta.url).href
)
</script>

<template>
  <img :src="iconSrc" :alt="alt" v-bind="$attrs" />
</template>

<style scoped></style>
