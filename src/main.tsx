import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App01} from './01_vlojennye_komponenty/App01.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App01 />
  </StrictMode>,
)
