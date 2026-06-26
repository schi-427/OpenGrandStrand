<script setup lang="ts">
const workItems = [
    { label: 'Overview', route: '/works' },
    { label: 'Open Data', route: '/works/open-data' },
    { label: 'Government Transparency', route: '/works/gov-transparency' },
    { label: 'Projects & Infrastructure', route: '/works/projects-infrastructure' },
    { label: 'Accountability & Ethics', route: '/works/accountability-ethics' },
    { label: 'Public Communications', route: '/works/public-comms' }
]
</script>

<template>
    <section class="work-layout">
        <nav class="section-nav">
            <RouterLink to="/works" exact-active-class="section-link-active">
                Overview
            </RouterLink>
            <RouterLink to="/works/open-data" exact-active-class="section-link-active">
                Open Data
            </RouterLink>
            <RouterLink to="/works/gov-transparency" exact-active-class="section-link-active">
                Government Transparency
            </RouterLink>
            <RouterLink to="/works/projects-infrastructure" exact-active-class="section-link-active">
                Projects & Infrastructure
            </RouterLink>
            <RouterLink to="/works/accountability-ethics" exact-active-class="section-link-active">
                Accountability & Ethics
            </RouterLink>
            <RouterLink to="/works/public-comms" exact-active-class="section-link-active">
                Public Communications
            </RouterLink>
        </nav>

        <RouterView />
    </section>
</template>