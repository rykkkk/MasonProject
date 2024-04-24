import logo from './logo.svg';
import './App.css';
import React from 'react';
import { OPSFooter, OPSHeader } from './components/Layout';

function App() {
    return (
        <div>
            <OPSHeader></OPSHeader>
            <OPSFooter></OPSFooter>
        </div>
    );
}

export default App;
