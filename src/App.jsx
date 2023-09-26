import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './ui/Home'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Navigate replace to="home" />,
        index: true,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
