import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initNotification } from './services/firebaseService'

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Notification App by Asad Siddique < /h1> <
        button onClick = { initNotification } > Configure Notification < /button> <
        /div>
    );
}

export default App;