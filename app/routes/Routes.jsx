import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Home from '../container/Home.jsx';
import Submit from '../container/Submit.jsx';
import React from 'react';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Route exact path="/" component={Home} />
		      	<Route  exact path="/submit" component={Submit} history={history}/>
		      </div>
		);
	}
}

export default Routes;