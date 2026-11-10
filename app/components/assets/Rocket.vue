<script setup lang="ts">

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300">
    <defs>
      <!-- body fill, lit from top-left like the sphere -->
      <radialGradient id="bodyFill" cx="35%" cy="25%" r="85%">
        <stop offset="0%" stop-color="#c9ccd0"/>
        <stop offset="45%" stop-color="#9a9fa5"/>
        <stop offset="100%" stop-color="#4a4f55"/>
      </radialGradient>
      <!-- shadow side -->
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#000" stop-opacity="0"/>
        <stop offset="55%" stop-color="#000" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
      </linearGradient>
      <linearGradient id="finFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e2453c"/>
        <stop offset="100%" stop-color="#8e1f1a"/>
      </linearGradient>
      <radialGradient id="windowFill" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#9aa3ad"/>
        <stop offset="60%" stop-color="#2b3036"/>
        <stop offset="100%" stop-color="#0d0f12"/>
      </radialGradient>
      <linearGradient id="flameFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="35%" stop-color="#ffd27a"/>
        <stop offset="75%" stop-color="#ff7a2e" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#ff7a2e" stop-opacity="0"/>
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3"/>
      </filter>
      <filter id="streak" x="-50%" y="-200%" width="200%" height="500%">
        <feGaussianBlur stdDeviation="1.6"/>
      </filter>

      <clipPath id="bodyClip">
        <path d="M100 20 C125 45 135 90 132 140 L128 210 Q100 220 72 210 L68 140 C65 90 75 45 100 20 Z"/>
      </clipPath>
    </defs>

    <!-- flame -->
    <path d="M86 226 Q100 300 114 226 Z" fill="url(#flameFill)" filter="url(#soft)"/>
    <path d="M92 226 Q100 268 108 226 Z" fill="#ffffff" opacity="0.85" filter="url(#streak)"/>

    <!-- fins -->
    <g stroke="#d8d2c8" stroke-width="2" stroke-linejoin="round">
      <path d="M71 160 L42 212 L46 232 L70 212 Z" fill="url(#finFill)"/>
      <path d="M129 160 L158 212 L154 232 L130 212 Z" fill="url(#finFill)"/>
    </g>

    <!-- nozzle -->
    <path d="M84 212 L116 212 L112 228 L88 228 Z" fill="#3a3f45" stroke="#d8d2c8" stroke-width="1.8"/>

    <!-- body -->
    <path d="M100 20 C125 45 135 90 132 140 L128 210 Q100 220 72 210 L68 140 C65 90 75 45 100 20 Z"
          fill="url(#bodyFill)" stroke="#d8d2c8" stroke-width="2.5"/>

    <g clip-path="url(#bodyClip)">
      <!-- nose cone -->
      <path d="M60 15 L140 15 L140 62 Q100 54 60 62 Z" fill="url(#finFill)"/>

      <!-- body band near bottom -->
      <path d="M60 172 Q100 180 140 172 L140 184 Q100 192 60 184 Z" fill="url(#finFill)"/>

      <!-- shadow side -->
      <rect x="60" y="15" width="80" height="210" fill="url(#shade)"/>

      <!-- light highlight on the lit side -->
      <path d="M84 70 C80 110 80 150 83 200" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.35" filter="url(#streak)"/>
    </g>

    <!-- window -->
    <circle cx="100" cy="98" r="14" fill="url(#windowFill)" stroke="#d8d2c8" stroke-width="2"/>
    <ellipse cx="95" cy="93" rx="5" ry="3" fill="#ffffff" opacity="0.55" filter="url(#streak)"/>
  </svg>
</template>

<style scoped>

</style>