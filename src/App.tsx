import './App.css';
import {Header} from "./microTasks/01_vlojennye_komponenty/Header";
import {Body} from "./microTasks/01_vlojennye_komponenty/Body";
import {Footer} from "./microTasks/01_vlojennye_komponenty/Footer";
import {NewComponent, students, topCars} from "./microTasks/02_map/NewComponent";

function App() {
    return (
        <>
            {/*01 вложенные компоненты*/}
            {/*<Header title="Hello World!"/>*/}
            {/*<Body titleForBody="NEW BODY"/>*/}
            {/*<Footer/>*/}

            {/*02 метод map*/}
            <NewComponent students={students} topCars={topCars}/>
        </>
    );
}

export default App;