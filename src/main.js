import './main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Trips from 'tripslist';

window.TravelCatalogRender = function TravelCatalogRender(DomNode) {
    ReactDOM.render(<App title={document.title} tripList={Trips} />, DomNode);
};

// window.addEventListener(
//     'load',
//     () => App.onUpdateTripSections()
// );
