<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '../Icons/IconSvg.vue'

const props = defineProps<{
  link: {
    to: string
    name: string
    icon: string
    unreadCount?: number
  }
}>()

const route = useRoute()

// Определяем активен ли текущий маршрут
const isActive = computed(() => route.path === props.link.to)
</script>

<template>
  <li :class="{ 'active-link': isActive }">
    <router-link :to="props.link.to">
      <div class="navbar_links_item">
        <Icon :iconName="props.link.icon" :alt="props.link.name" />
        <a
          >{{ props.link.name }}
          <span v-if="props.link.unreadCount">{{ props.link.unreadCount }}</span>
        </a>
      </div>
    </router-link>
  </li>
</template>

<style scoped>
.active-link::before {
  background-color: #fff;
}
.navbar_links_item {
  display: flex;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 4px 29px 4px 29px;
}
.navbar_links_item a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333;
  font-weight: 400;
  font-size: 16px;
  margin-left: 16px;
}
.navbar_links_item a span {
  font-size: 14px;
}
</style>
