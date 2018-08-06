import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './css/app.scss';
import App from './App.jsx';
import "es6-promise/auto";


import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);