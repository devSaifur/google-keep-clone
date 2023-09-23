import { useEffect, useCallback } from 'react'

function useOutsideClick(ref, submitCallback, listenCapturing = true) {
  const handleClick = useCallback(
    (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }
      submitCallback()
    },
    [ref, submitCallback]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick, listenCapturing)

    return () => {
      document.removeEventListener('click', handleClick, listenCapturing)
    }
  }, [handleClick, listenCapturing])
}

export { useOutsideClick }
