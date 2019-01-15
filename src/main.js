import './main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Trips from './../data/Trips';

window.addEventListener(
    'load',
    () => ReactDOM.render(<App title={document.title} tripList={Trips} />, document.getElementById('root'))
);

// window.addEventListener(
//     'load',
//     () => App.onUpdateTripSections()
// );
