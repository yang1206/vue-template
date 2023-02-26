<script setup lang="ts">
import { useCounterStore } from '@/store'
const useCount = useCounterStore()
const { inc, dec } = useCount
</script>

<template>
  <div>
    <p class="font-semibold">
      {{ useCount.count }}
    </p>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="inc()">
      +
    </button>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="dec()">
      -
    </button>
  </div>
</template>
