<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import 'primeicons/primeicons.css'
import logoUrl from '../assets/pelical-silhouette.jpg'

const isDarkMode = ref(false)

const items = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'About',
        route: '/about',
    },
    {
        label: 'Our Work',
        route: '/works',
    },
    {
        label: 'Blog',
        route: '/blog',
    },
]
function applyDarkMode(value: boolean) {
    isDarkMode.value = value
    document.documentElement.classList.toggle('app-dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
}

function toggleDarkMode() {
    applyDarkMode(!isDarkMode.value)
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
        applyDarkMode(savedTheme === 'dark')
        return
    }

    applyDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
})
</script>
<template>
    <header class="site-header">

        <RouterLink to="/" class="brand-link">
            <img :src="logoUrl" alt="Open Grand Strand logo" class="brand-logo" />

            <div>
                <div class="site-title">Open Grand Strand</div>
                <div class="site-tagline">
                    Transparency • Accountability • Civic Engagement
                </div>
            </div>
        </RouterLink>
        <Menubar :model="items" class="site-menubar">
            <template #item="{ item, props }">
                <RouterLink v-if="item.route" v-slot="{ href, navigate, isActive }" :to="item.route" custom>
                    <a v-bind="props.action" :href="href" :class="{ 'active-nav-link': isActive }" @click="navigate">
                        {{ item.label }}
                    </a>
                </RouterLink>
            </template>
            <template #end>
                <Button class="theme-toggle" :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" rounded text raised
                    severity="contrast" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
                    @click="toggleDarkMode" />
            </template>
        </Menubar>
    </header>
</template>
<style scoped></style>
