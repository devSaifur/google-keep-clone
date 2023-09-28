import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import DarkModeProvider from './context/DarkModeContext.jsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
