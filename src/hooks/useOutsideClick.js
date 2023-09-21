import { useEffect } from 'react'

function useOutsideClick(ref, submitCallback, listenCapturing = true) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        submitCallback()
      }
    }

    document.addEventListener('click', handleClick, listenCapturing)

    return () => {
      document.removeEventListener('click', handleClick, listenCapturing)
    }
  }, [ref, submitCallback, listenCapturing])
}

export { useOutsideClick }
