import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
// import {App01} from './01_vlojennye_komponenty/App01.tsx';
// import {App02} from './02_map/App02.tsx';
// import {App03} from './03_button/App03.tsx';
// import {App04} from './04_usestate/App04.tsx';
import {App05} from './05_filter/App05.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App01 />*/}
        {/*<App02 />*/}
        {/*<App03 />*/}
        {/*<App04/>*/}
        <App05/>
    </StrictMode>,
)
