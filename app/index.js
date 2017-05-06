require('bootstrap/dist/css/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './components/MessageBox';
//var model = require('./local');
var model = require('./remote');
ReactDOM.render(<MessageBox model={model}/>,document.querySelector('#app'));


