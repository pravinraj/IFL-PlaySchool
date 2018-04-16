import React from 'react';
import {
	Switch,BrowserRouter, Route
} from 'react-router-dom';
import Main from '../Main.jsx';
import About from '../containers/About.jsx';
import Home from '../containers/Home.jsx';


const Routes=()=>{
	return(
	  <BrowserRouter>
	  <Switch>
		<Route path='/' exact render={(props)=><Main {...props}/>}/>
		<Route path='/home' exact render={(props)=><Home {...props}/>}/>
		<Route path='/about' exact render={(props)=><About {...props}/>}/>
		</Switch>
	  </BrowserRouter>
	);
}

export default Routes;