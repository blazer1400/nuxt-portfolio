<script setup lang="ts">
const pages = {
  about: 'About',
  work: 'Work',
  stack: 'Stack',
  contact: 'Contact'
}
</script>

<template>
  <div class="w-full px-[120px] py-[32px] flex items-center justify-between uppercase font-['Space_Mono'] tracking-[12%] z-20 relative">
    <RouterLink to="#home" class="relative flex items-center gap-4 hover:underline">
      <div class="rounded-full w-4 h-4 bg-emerald-300 shadow-md shadow-emerald-300/50"></div>
      Stan Broersma
    </RouterLink>

    <div class="gap-8 flex items-center">
      <RouterLink class="text-gray-400/90 cursor-pointer hover:text-white transition-colors duration-200"
          v-for="(value, link) in pages" :to="'#'+link">{{ value }}</RouterLink>
    </div>

    <RouterLink to="#contact" class="rounded-full border border-subtle hover:bg-subtle py-4 px-6 text-white/90 transition-colors duration-200">
      Let's talk
    </RouterLink>
  </div>
</template>

<style scoped>

</style>