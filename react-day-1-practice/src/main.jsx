import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DayOneComponent from './components/dayOneComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DayOneComponent/>
  </StrictMode>,
)
