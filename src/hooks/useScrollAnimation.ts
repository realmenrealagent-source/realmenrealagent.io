import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return { ref, inView }
}
