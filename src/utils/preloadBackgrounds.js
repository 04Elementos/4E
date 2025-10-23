import bgHome from '@/assets/images/backgrounds/bg-home.jpg'
import bgWarning from '@/assets/images/backgrounds/bg-warning-diabo.jpg'
import bgQuiz from "@/assets/images/backgrounds/bg-quiz.jpg";

const backgrounds = {
  home: bgHome,
  warning: bgWarning,
  quiz: bgQuiz
}

export default backgrounds

export function preloadBackgrounds() {
  Object.values(backgrounds).forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}
