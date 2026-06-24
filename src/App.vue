<script setup lang="ts">

import SiteHeader from './components/Header.vue'
import { RouterLink } from 'vue-router'

</script>

<template>
  <SiteHeader />

  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped>
.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
