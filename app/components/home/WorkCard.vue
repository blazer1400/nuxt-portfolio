<script setup lang="ts">
const props = defineProps<{
  image: string
}>()
</script>

<template>
  <div class="rounded-xl bg-surface border border-surface w-max text-muted p-4 shadow">
    <slot>efeffw</slot>
  </div>
</template>

<style scoped>

</style>