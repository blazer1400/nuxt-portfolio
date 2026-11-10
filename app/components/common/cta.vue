<script setup lang="ts">
import {computed} from "vue";

type Style = 'primary' | 'secondary'

const props = withDefaults(defineProps<{
  to: string,
  variant: Style
}>(), {
  variant: 'primary'
})

const cls = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-aurora border-aurora text-inverse hover:bg-transparent hover:text-white'
    case 'secondary':
      return 'border-subtle hover:bg-subtle'
  }
})
</script>

<template>
  <RouterLink class="rounded-full py-4 px-12 border shadow font-medium transition-colors duration-150"
              :to="props.to" :class="cls">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>

</style>