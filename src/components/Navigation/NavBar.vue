<script setup lang="ts">
import Icon from '../Icons/IconSvg.vue'
import NavLink from './NavLink.vue'

// Массив ссылок с иконками, именами и маршрутами
const navLinks = [
  { to: '/reports', name: 'Отчеты', icon: 'Reports', unreadCount: 4 },
  { to: '/tasks', name: 'Задания', icon: 'Tasks' },
  { to: '/users', name: 'Пользователи', icon: 'Users' },
  { to: '/orders', name: 'Заказы', icon: 'Orders' },
  { to: '/news', name: 'Новости', icon: 'News' },
  { to: '/training', name: 'Обучение', icon: 'Training' },
  { to: '/analytics', name: 'Аналитика', icon: 'Analytics' },
  { to: '/sku', name: 'SKU', icon: 'SKU' },
  { to: '/faq', name: 'FAQ', icon: 'FAQ' },
  { to: '/newsletter', name: 'Рассылка', icon: 'Newsletter' },
  { to: '/feedback', name: 'Обратная связь', icon: 'Feedback' }
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar_icon">
      <Icon iconName="Logo" alt="Logo" />
    </div>
    <div class="navbar_links">
      <ul>
        <NavLink v-for="(link, index) in navLinks" :key="index" :link="link" />
      </ul>
    </div>
    <div class="navbar_button">
      <div class="navbar_button-logout">
        <Icon iconName="LogOut" alt="LogOut" />
        <a>Выйти</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import '../../styles/navbar.css';
</style>
