import React from 'react';
import './App.scss';
import {Main} from "./Pages/Main";
import {Discover} from "./Pages/Dicover";
import {Standarts} from "./Pages/Standarts";
import {Quality} from "./Pages/Quality";
import {Exclusivity} from "./Pages/Exclusivity";
import {Contacts} from "./Pages/Contacts";
import {Footer} from "./Pages/Footer";


function App() {
    return (
        <div className="App">
            <Main/>
            <Discover/>
            <Standarts/>
            <Quality/>
            <Exclusivity/>
            <Contacts/>
            <Footer />
        </div>
    );
}

export default App;
