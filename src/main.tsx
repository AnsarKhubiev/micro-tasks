import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {App01} from './01_vlojennye_komponenty/App01.tsx';
import {App02} from './02_map/App02.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App01 />*/}
    <App02 />
  </StrictMode>,
)
