import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'; 

import App from './App.jsx';
var history = {}
ReactDOM.render(
	<Router  >
      	<Route path="/" component={App}/>
    </Router>, document.getElementById('app'));