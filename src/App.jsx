import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
