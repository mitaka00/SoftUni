import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


setInterval(()=>{
    ReactDOM.render(App(), document.getElementById('root')),
    1000
})
registerServiceWorker();
