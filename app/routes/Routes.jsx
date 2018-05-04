import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Home from '../container/Home.jsx';
import About from '../container/About.jsx';
import React from 'react';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Route exact path="/" component={Home} />
		      	<Route  exact path="/submit" component={About} history={history}/>
		      </div>
		);
	}
}

export default Routes;