import './App.css';
import {Header} from "./microTasks/01_vlojennye_komponenty/Header";
import {Body} from "./microTasks/01_vlojennye_komponenty/Body";
import {Footer} from "./microTasks/01_vlojennye_komponenty/Footer";

function App() {
    return (
        <>
            <Header title="Hello World!"/>
            <Body titleForBody="NEW BODY"/>
            <Footer/>
        </>
    );
}

export default App;