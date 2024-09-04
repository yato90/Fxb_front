<script setup lang="ts">
import Icon from './Icons/IconSvg.vue'
</script>

<template>
  <nav class="navbar">
    <div class="navbar_icon">
      <Icon iconName="Logo" alt="Logo" />
    </div>
    <div class="navbar_links">
      <ul>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Reports" alt="Reports" />
            <a>Отчеты<span>4</span></a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Tasks" alt="Tasks" />
            <a>Задания</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Users" alt="Users" />
            <a>Пользователи</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Orders" alt="Orders" />
            <a>Заказы</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="News" alt="News" />
            <a>Новости</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Training" alt="Training" />
            <a>Обучение</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Analytics" alt="Analytics" />
            <a>Аналитика</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="SKU" alt="SKU" />
            <a>SKU</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="FAQ" alt="FAQ" />
            <a>FAQ</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Newsletter" alt="Newsletter" />
            <a>Рассылка</a>
          </div>
        </li>
        <li>
          <div class="navbar_links_item">
            <Icon iconName="Feedback" alt="Feedback" />
            <a>Обратная связь</a>
          </div>
        </li>
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
@import '../styles/navbar.css';
</style>
