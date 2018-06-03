import React from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import Home from '../container/Home.jsx';
import About from '../container/About.jsx';
import Events from '../container/Events.jsx';
import Admissions from '../container/Admissions.jsx';
import Contact from '../container/Contact.jsx';
import DayCare from '../container/DayCare.jsx';
import Montessori from '../container/Montessori.jsx';
import PlayGym from '../container/PlayGym.jsx';
import AfterSchoolActivities from '../container/AfterSchoolActivities.jsx';
import MeTime from '../container/MeTime.jsx';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Route exact path="/" component={Home} />
		      	<Route  exact path="/about" component={About} history={history}/>
		      	<Route  exact path="/programs/daycare" component={DayCare} history={history}/>
		      	<Route  exact path="/programs/montessori" component={Montessori} history={history}/>
		      	<Route  exact path="/programs/playgym" component={PlayGym} history={history}/>
		      	<Route  exact path="/programs/post-school-activities" component={AfterSchoolActivities} history={history}/>
		      	<Route  exact path="/programs/me-time" component={MeTime} history={history}/>

		      	<Route  exact path="/events" component={Events} history={history}/>
		      	<Route  exact path="/admissions" component={Admissions} history={history}/>
		      	<Route  exact path="/contact" component={Contact} history={history}/>
		      </div>
		);
	}
}

export default Routes;