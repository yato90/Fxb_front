<script setup lang="ts">
import NavBar from '../components/Navigation/NavBar.vue'
</script>

<template>
  <div class="layout">
    <NavBar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  background-color: #ffffff;
}
</style>
