import { useState, createContext, useEffect } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(
    function () {
      if (!isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    [isDarkMode]
  )

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
export { DarkModeContext }
