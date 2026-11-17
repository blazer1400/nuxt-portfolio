<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>

<template>
  <div :style="{ backgroundImage: `radial-gradient(circle closest-side, ${color}, transparent)` }"
      class="z-0 pointer-events-none w-[900px] h-[900px] opacity-55"></div>
</template>

<style scoped>

</style>