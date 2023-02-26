<script setup lang="ts">
import { useCounterStore } from '@/store'
const { inc, dec } = useCounterStore()
</script>

<template>
  <div>
    <p class="font-semibold">
      {{ useCounterStore().count }}
    </p>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="inc()">
      +
    </button>
    <button class="btn m-4 h-8 w-8 rounded-full text-center" @click="dec()">
      -
    </button>
  </div>
</template>
