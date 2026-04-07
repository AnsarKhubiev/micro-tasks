import {Header} from './components/Header.tsx';
import {Body} from './components/Body.tsx';
import {Footer} from './components/Footer.tsx';


export const App01 = () => {
    return (
        <div>
            <Header title="Header"/>
            <Body titleForBody="Body"/>
            <Footer/>
        </div>
    );
};
