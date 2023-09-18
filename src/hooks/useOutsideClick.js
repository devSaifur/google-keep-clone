import { useEffect } from 'react'

function useOutsideClick(formRef, submitCallback) {
  useEffect(() => {
    function handleClick(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        submitCallback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [formRef, submitCallback])
}

export { useOutsideClick }
