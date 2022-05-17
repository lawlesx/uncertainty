import { useLayoutEffect, useState } from 'react'

const useWindowSize = () => {
	const [size, setSize] = useState([2000, 2000])

	useLayoutEffect(() => {
    const handleResize = () => setSize([window.innerHeight, window.innerWidth])
		if (typeof window !== undefined) {
			window.addEventListener('resize', handleResize)

			handleResize()

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	return size
}

export default useWindowSize
