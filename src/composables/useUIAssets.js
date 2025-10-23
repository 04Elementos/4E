import { ref } from 'vue'
import { keyElement } from './useResult.js'

export const imageElement = ref('')

const backgroundElement = import.meta.glob('@/assets/images/ui/bg-*.jpg', {
    eager: true,
    import: 'default'
})
const bannerElement = import.meta.glob('@/assets/images/ui/banner-*.jpg', {
    eager: true,
    import: 'default'
})

export function setBackgroundElement() {
    const suffix = `bg-${keyElement.value}.jpg`
    const entry = Object.entries(backgroundElement).find(([file]) => file.endsWith(suffix))
    const url = entry[1]

    document.documentElement.style.setProperty('--background-image', `url(${url})`)
}

export function setBannerElement() {
    if (!keyElement.value) return

    const pathBA = `/src/assets/images/ui/banner-${keyElement.value}.jpg`
    const banner = bannerElement[pathBA]
    imageElement.value = banner
}
