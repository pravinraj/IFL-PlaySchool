import React from 'react';
import {
 Navbar,
 NavItem,
 Col,
 Nav } from 'react-bootstrap';
 import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Routes from './routes/Routes.jsx';



class App extends React.Component {
	render() {
		return (
			<Col xs={12} className='app-header'>
			<Router>
		    <div>
			<Navbar inverse collapseOnSelect className='app-nav-bar'>
				<Navbar.Header>
				    <Navbar.Brand>
				      <a href="#" className='app-logo'>
				      	<img src='../img/IFL-logo.jpg'/>
				      </a>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav className='app-menu-wrapper'>
						<NavItem><NavLink exact activeClassName='activeNav' to='/'>Home</NavLink></NavItem>
						<NavItem><NavLink exact activeClassName='activeNav' to='/submit'>About</NavLink></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		        <Routes/>
		    </div>
		  </Router>
		  </Col>
					
		);
	}
}

export default App;