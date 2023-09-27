function AppContainer({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-gray-700 text-white">
      {children}
    </div>
  )
}

export default AppContainer
