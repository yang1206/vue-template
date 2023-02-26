<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getGithub } from '@/api'

const { data } = useQuery({
  queryKey: ['git'],
  queryFn() {
    return getGithub()
  },
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button
      class="icon-btn !outline-none"
      :class="isDark ? 'i-line-md:sunny-outline-to-moon-loop-transition' : 'i-line-md:sunny-outline-loop'"
      @click.stop="toggleDark()"
    >
      xxz
    </button>

    <a class="icon-btn i-line-md:github-loop" rel="noreferrer" :href="data?.html_url" target="_blank" title="GitHub" />
  </nav>
</template>
