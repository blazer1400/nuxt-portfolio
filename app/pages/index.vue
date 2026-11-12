<script setup lang="ts">
import { gsap } from 'gsap'
import type { ComponentPublicInstance } from 'vue'
import Eyebrow from "~/components/common/Eyebrow.vue";

const home = ref<HTMLElement | null>(null)
const about = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
// ref op een component = de component-instantie; het DOM-element zit in $el
const earth = ref<ComponentPublicInstance | null>(null)
const earthEl = () => earth.value!.$el as HTMLElement   // de <div> (root van AssetsSphere)
let ctx: gsap.Context | undefined

// Percentage van de schermbreedte/-hoogte in pixels, bv. vw(50) = halve schermbreedte
const vw = (pct: number) => window.innerWidth * pct / 100
const vh = (pct: number) => window.innerHeight * pct / 100

// GSAP roept function-based waarden opnieuw aan bij invalidate (resize), ook voor
// motionPath. De types kennen die vorm niet, vandaar de cast op één plek.
const responsivePath = (fn: () => MotionPath.Vars) => fn as unknown as MotionPath.Vars

const skills = {
  Frontend: "Nuxt, Vue, TypeScript",
  Backend: "PHP, Laravel, Node.js, MySQL, PostgreSQL",
  Infra: "Linux, Docker, Nginx, Kubernetes"
}

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.effects.fadeInUp(title.value)

    // Centreren via xPercent/yPercent i.p.v. Tailwind translate-classes, zodat x/y in het path vanaf 0 beginnen
    gsap.set('#rocket', { xPercent: -50, yPercent: -50, rotation: 120, transformOrigin: '50% 50%' })
    gsap.set('#earth', { xPercent: -50, yPercent: 70 })
    gsap.timeline({
      scrollTrigger: {
        trigger: home.value,
        start: 'top top',
        end: '+=100%',   // hoe lang (in scrollafstand) de sectie gepind blijft
        pin: true,
        scrub: 0.5,        // koppel de timeline aan de scrollpositie (1s "smoothing")
        invalidateOnRefresh: true, // bij resize het pad opnieuw berekenen
        // markers: true, // handig tijdens debuggen
      },
    })
      .to('#rocket', {
        ease: 'none',
        // Als functie, zodat vw()/vh() bij een resize opnieuw worden uitgerekend
        motionPath: responsivePath(() => ({
          path: [
            { x: vw(38), y: vh(33) },
            { x: vw(-35), y: vh(100) - 100 },
            { x: vw(-50), y: vh(100) - 200 }
          ],
          curviness: 2,         // 0 = rechte lijnen, hoger = ronder
          autoRotate: 90,         // neus volgt de curve (+90° want de SVG wijst omhoog)
        })),
      })

    gsap.timeline({
      scrollTrigger: {
        trigger: home.value,
        start: 'bottom bottom',
        endTrigger: about.value,
        end: 'top top',          // klaar zodra #about het scherm vult
        pin: false,
        scrub: 1,
        invalidateOnRefresh: true, // bij resize de eindpositie opnieuw berekenen
      },
    })
        .to('#earth', {
          ease: 'power2.out',
          scale: 0.6,
          yPercent: -50,
          xPercent: -50,
          y: () => home.value!.offsetHeight + about.value!.offsetHeight / 2 - earthEl().offsetTop,
          x: () => -(earthEl().offsetLeft) + vw(8)
        })

    gsap.set('#rocket-2', { rotation: 90, transformOrigin: '50% 50%' })
    gsap.timeline({
      scrollTrigger: {
        trigger: about.value,
        start: 'top center',
        end: '+=80%',
        pin: false,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    })
        .to('#rocket-2', {
          ease: 'none',
          motionPath: responsivePath(() => ({
            path: [
              { x: vw(80), y: 50 },
              { x: vw(120), y: 350 },
            ],
            curviness: 2,         // 0 = rechte lijnen, hoger = ronder
            autoRotate: 90,         // neus volgt de curve (+90° want de SVG wijst omhoog)
          })),
        })
  })
})

onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <!-- hero -->
  <section id="home" ref="home" class="h-screen w-full bg-void relative z-10 text-white flex flex-col">
    <HomeHeader />

    <div class="w-full h-full flex flex-col items-center text-center gap-[24px] mt-[4%] relative z-20">
      <Eyebrow>Fullstack developer <span class="mx-8">/</span> Netherlands</Eyebrow>
      <h1 ref="title" class="invisible text-8xl font-['Space_Grotesk'] font-bold">Code that <br /> reaches orbit.</h1>
      <h2 class="text-muted text-xl">I build fast web apps, APIs and the infrastructure underneath. <br /> From first idea to launch.</h2>

      <!-- CTAs -->
      <div class="flex items-center justify-center gap-8">
        <CommonCta to="#work" variant="primary">View my work</CommonCta>
        <CommonCta to="#work" variant="secondary">Get in touch</CommonCta>
      </div>
    </div>

    <!-- hero rocket -->
    <AssetsRocket id="rocket" class="absolute z-20 left-[20%] -top-20 w-28 h-max" />

    <!-- assets -->
    <AssetsSphere id="earth" ref="earth" class="w-6xl h-max absolute left-1/2 bottom-0" />
    <AssetsNebula color="#5B2A86" class="absolute -top-80 -left-80" />
    <AssetsNebula color="#1E6F8C" class="absolute -bottom-1/2 -right-1/4" />
    <AssetsStars class="absolute top-0 left-0 w-full h-full z-0"/>
  </section>

  <section id="about" ref="about" class="w-full h-screen relative flex items-center bg-void">
    <div class="w-7xl mx-auto">
      <div class="ml-auto space-y-4 w-xl">
        <Eyebrow>01 <span class="mx-8">/</span> About</Eyebrow>
        <CommonSectionTitle class="w-lg">Fullstack developer, from database to browser.</CommonSectionTitle>
        <p class="text-muted text-lg">
          I'm Stan, a 23 year old fullstack developer from the Netherlands. I design and build web applications end to end:
          clean front-ends in Nuxt and Vue, solid APIs and databases, and the Linux servers, containers and pipelines that
          keep them running.
        </p>
        <div class="flex gap-4">
          <div class="w-full border-t border-subtle/50 pt-4" v-for="(description, skill) in skills">
            <p class="uppercase text-aurora tracking-widest text-xs font-[Space_Mono]">{{ skill }}</p>
            <p class="text-muted">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- second rocket -->
    <AssetsRocket id="rocket-2" class="absolute left-[-20%] top-[5%] w-28 h-max z-20" />
    <AssetsStars class="absolute top-0 left-0 w-full h-full z-0"/>
  </section>

  <section id="work" ref="work" class="w-full z-10 h-screen relative bg-void">
    <div class="w-7xl mx-auto py-20">
      <Eyebrow>02 <span class="mx-8">/</span> Work</Eyebrow>
    </div>

    <AssetsNebula color="#B23A7A" class="absolute -bottom-1/2 -left-1/4" />
  </section>
</template>

<style scoped>

</style>
