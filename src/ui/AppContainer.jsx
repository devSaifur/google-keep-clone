function AppContainer({ children }) {
  return (
    <div className="h-screen overflow-y-auto bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </div>
  )
}

export default AppContainer
