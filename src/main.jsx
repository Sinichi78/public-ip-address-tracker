import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css';

createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>,
)
