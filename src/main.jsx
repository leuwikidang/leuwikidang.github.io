import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import favicon_png from "./assets/favicon/favicon-96x96.png";
import favicon_svg  from "./assets/favicon/favicon.svg";
import favicon_ico from "./assets/favicon/favicon.ico";
import favicon_apple from "./assets/favicon/apple-touch-icon.png";
import manifest from "./assets/favicon/site.webmanifest";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
