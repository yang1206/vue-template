<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getGithub } from '@/api'
import { useCounterStore } from '@/store'
const { count } = useCounterStore()
const { data, isLoading } = useQuery(['git'], getGithub)
</script>

<template>
  <div class="home">
    <div class="i-carbon-campsite inline-block text-4xl" />
    <p>
      <a rel="noreferrer" href="https://github.com/yang1206/react-template" target="_blank">
        a vue3，vite template
      </a>
    </p>
    <p>
      <em class="text-sm op75">Opinionated Vite Starter Template</em>
    </p>

    <div class="py-4" />
    <p class="font-semibold">
      {{ count }}
    </p>
  </div>
  <p v-if="isLoading">
    Loading...
  </p>
  <a v-else className="block" :href="data?.html_url">{{ data?.full_name }}</a>
</template>
