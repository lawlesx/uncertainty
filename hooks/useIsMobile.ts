import useWindowSize from './useWindowSize'

const useIsMobile = () => {
  const [, width] = useWindowSize()

  return width < 1024
}

export default useIsMobile
