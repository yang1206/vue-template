<script setup lang="ts">
import { useCounterStore } from '@/store'
const useCount = useCounterStore()
const { count, inc, dec } = useCount
</script>

<template>
  <div>
    <p class="font-semibold">
      {{ count }}
    </p>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="inc()">
      +
    </button>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="dec()">
      -
    </button>
  </div>
</template>
