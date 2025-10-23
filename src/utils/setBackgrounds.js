import backgrounds from './preloadBackgrounds'

const bgDefault = 'home'
let currentKey = bgDefault

export function setBackground(key) {
  const k = key || bgDefault
  const url = backgrounds[k] || backgrounds[bgDefault]
  document.documentElement.style.setProperty('--background-image', `url(${url})`)
  currentKey = k
}
