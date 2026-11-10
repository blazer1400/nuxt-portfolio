import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

  gsap.registerEffect({
    name: 'fadeInUp',
    effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) =>
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: config.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: config.duration,
          delay: config.delay,
          ease: config.ease,
          stagger: config.stagger,
        },
      ),
    defaults: { y: 40, duration: 1, delay: 0, ease: 'power4.out', stagger: 0.1 },
    extendTimeline: true,
  })
})
