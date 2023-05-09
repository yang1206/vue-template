<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import ThemeMode from './ThemeMode.vue'
import { getGithub } from '@/api'

const { data } = useQuery({
  queryKey: ['git'],
  queryFn() {
    return getGithub()
  },
})
</script>

<template>
  <nav class="mt-6 inline-flex gap-2 text-xl">
    <ThemeMode />
    <a class="i-line-md:github-loop icon-btn" rel="noreferrer" :href="data?.html_url" target="_blank" title="GitHub" />
  </nav>
</template>
