<script setup lang="ts">
import { gsap } from 'gsap'

const home = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
let ctx: gsap.Context | undefined

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.effects.fadeInUp(title.value)

    // Beginrotatie via GSAP i.p.v. Tailwind's rotate-[150deg], anders tellen
    // de CSS `rotate` en de GSAP-rotatie bij elkaar op.
    gsap.set('#rocket', { rotation: 120, transformOrigin: '50% 50%' })

    gsap.timeline({
      scrollTrigger: {
        trigger: home.value,
        start: 'top top',
        end: '+=100%',   // hoe lang (in scrollafstand) de sectie gepind blijft
        pin: true,
        scrub: 1,        // koppel de timeline aan de scrollpositie (1s "smoothing")
        // markers: true, // handig tijdens debuggen
      },
    })
      .to('#rocket', {
        ease: 'none',
        motionPath: {
          path: [
            // { x: 200, y: 300},
            { x: 550, y: 300 },
            { x: 150, y: window.innerHeight },
          ],
          curviness: 2,         // 0 = rechte lijnen, hoger = ronder
          autoRotate: 90,         // neus volgt de curve (+90° want de SVG wijst omhoog)
        },
      })

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: home.value,
    //     start: 'top top',
    //     end: '+=100%',   // hoe lang (in scrollafstand) de sectie gepind blijft
    //     pin: false,
    //     scrub: 1,        // koppel de timeline aan de scrollpositie (1s "smoothing")
    //     // markers: true, // handig tijdens debuggen
    //   },
    // })
    //     .to('#rocket', {
    //       ease: 'none',
    //       motionPath: {
    //         path: [
    //           { x: 200, y: 300},
    //           { x: 550, y: 300 },
    //           { x: 0, y: window.innerHeight },
    //         ],
    //         curviness: 0,         // 0 = rechte lijnen, hoger = ronder
    //         autoRotate: 90,         // neus volgt de curve (+90° want de SVG wijst omhoog)
    //       },
    //     })
  }, home.value!) // scope: selectors zoeken alleen binnen #home
})

onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <!-- hero -->
  <div id="home" ref="home" class="h-screen w-screen bg-black relative text-white flex flex-col">
    <HomeHeader />

    <div class="w-screen h-full flex flex-col items-center text-center gap-[24px] mt-20 relative z-20">
      <p class="uppercase font-['Space_Mono'] text-aurora">Fullstack developer <span class="mx-10">/</span> Netherlands</p>
      <h1 ref="title" class="invisible text-8xl font-['Space_Grotesk'] font-bold">Code that <br /> reaches orbit.</h1>
      <h2 class="text-muted text-xl">I build fast web apps, APIs and the infrastructure underneath. <br /> From first idea to launch.</h2>

      <!-- CTAs -->
      <div class="flex items-center justify-center gap-8">
        <CommonCta to="#work" variant="primary">View my work</CommonCta>
        <CommonCta to="#work" variant="secondary">Get in touch</CommonCta>
      </div>
    </div>

    <AssetsRocket id="rocket" class="absolute z-10 left-[20%] -top-20 -translate-y-1/2 -translate-x-1/2 rotate-[135deg] -top-0 w-28 h-max" />
    <AssetsSphere class="w-40 h-max absolute bottom-[20%] left-[10%] z-10" />
    <AssetsPurpleNebula class="absolute top-0 left-0 z-0" />
    <AssetsCyanNebula class="absolute bottom-0 right-0 z-0" />
    <AssetsStars class="absolute top-0 left-0 w-screen h-screen z-0"/>
  </div>
</template>

<style scoped>

</style>