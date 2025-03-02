import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router'
import RouterConfig from './RouterConfig.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RouterConfig />
    </StrictMode>,
  </BrowserRouter>
)
