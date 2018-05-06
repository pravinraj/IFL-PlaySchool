import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Home from '../container/Home.jsx';
import About from '../container/About.jsx';
import Events from '../container/Events.jsx';
import Admissions from '../container/Admissions.jsx';
import Contact from '../container/Contact.jsx';
import React from 'react';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Route exact path="/" component={Home} />
		      	<Route  exact path="/submit" component={About} history={history}/>
		      	<Route  exact path="/events" component={Events} history={history}/>
		      	<Route  exact path="/admissions" component={Admissions} history={history}/>
		      	<Route  exact path="/contact" component={Contact} history={history}/>
		      </div>
		);
	}
}

export default Routes;