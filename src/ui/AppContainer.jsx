function AppContainer({ children }) {
  return (
    <div className="h-screen overflow-y-auto bg-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </div>
  )
}

export default AppContainer
