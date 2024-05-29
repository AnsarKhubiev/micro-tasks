import React from 'react';
import {Body} from "./components/Body";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export const App01 = () => {
    return (
        <div>
            <Header title="Header"/>
            <Body titleForBody='Body'/>
            <Footer />
        </div>
    );
};