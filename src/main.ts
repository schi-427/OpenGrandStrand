import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import './assets/main.css'

const app = createApp(App)

const OpenGrandStrandTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#E6F0F6',
            100: '#C2D9E8',
            200: '#9BC0D8',
            300: '#73A7C8',
            400: '#4B8EB8',
            500: '#0B3C5D', // main ocean blue
            600: '#0A3553',
            700: '#082A40',
            800: '#061F30',
            900: '#04131F'
        }
    }
})
app.use(router)
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: OpenGrandStrandTheme,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
})

app.mount('#app')



