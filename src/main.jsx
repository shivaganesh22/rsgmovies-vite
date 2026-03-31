import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './views/other/AuthContext'
import { ScrollToTop } from './views/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ScrollToTop />
      <App />
      <Analytics />
    </AuthProvider>
  </BrowserRouter>
)
