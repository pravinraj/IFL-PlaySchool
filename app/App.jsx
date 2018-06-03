import React from 'react';
import {
 Navbar,
 NavItem,
 Col,
 Nav,
 NavDropdown,
 MenuItem
} from 'react-bootstrap';
 import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Routes from './routes/Routes.jsx';




class App extends React.Component {
   
   constructor(props){
     super(props);
      this.state = { 
      	isOpen: false
      };
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
   }

   handleOpen(){
    this.setState({ isOpen: true })
  }

  handleClose(){
     this.setState({ isOpen: false })
  }

  /* navigate(){
   	this.props.history.push('/');
   }*/

	render() {
		console.log('this.state!!!!!! ', this.state.isOpen);
		return (
			<Col xs={12} className='app-header'>
				<Col xs={12} className='header-contact-details'>
					<p>Call Us Now! <span>9791167467, 9962983672</span></p>
				</Col>
				<Col xs={12} className='app-header-nav-bar'>
				<Router>
				    <div>
					<Navbar inverse collapseOnSelect className='app-nav-bar'>
						<Navbar.Header>
						    <Navbar.Brand>
						      <a className='app-logo' onClick={(e)=>{e.preventDefault();this.props.history.push('/')}}>
						      	<img src='../img/logo-3.png' className='logo-img'/>
						      	{/*<span className='fun-toddz'>Fun-Toddz</span>*/}
						      </a>
						    </Navbar.Brand>
						    <Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav className='app-menu-wrapper' pullRight>
								<NavItem><NavLink exact activeClassName='activeNav' to='/'>Home</NavLink></NavItem>
								<NavItem><NavLink exact activeClassName='activeNav' to='/about'>About</NavLink></NavItem>
								<NavDropdown className = 'header-dropdown'
								  onMouseEnter = { this.handleOpen }
						          onMouseLeave = { this.handleClose }
						          open={this.state.isOpen}
						          noCaret
						          
								  eventKey={3} title="Programs" id="basic-nav-dropdown">
									<NavLink exact activeClassName='activeNav' to='/programs/daycare'><MenuItem className='dropdown-content' eventKey={3.1}>Day Care</MenuItem></NavLink>
	      							<NavLink exact activeClassName='activeNav' to='/programs/montessori'><MenuItem className='dropdown-content' eventKey={3.2}>Montessori</MenuItem></NavLink>
	      							<NavLink exact activeClassName='activeNav' to='/programs/playgym'><MenuItem className='dropdown-content' eventKey={3.2}>Play Gym</MenuItem></NavLink>
	      							<NavLink exact activeClassName='activeNav' to='/programs/post-school-activities'><MenuItem className='dropdown-content' eventKey={3.2}>Post School Activities</MenuItem></NavLink>
	      							<NavLink exact activeClassName='activeNav' to='/programs/me-time'><MenuItem className='dropdown-content' eventKey={3.2}>Me time</MenuItem></NavLink>
								</NavDropdown>
								{/*<NavItem><NavLink exact activeClassName='activeNav' to='/submit'>About</NavLink></NavItem>*/}
								
								<NavItem><NavLink exact activeClassName='activeNav' to='/admissions'>Admissions</NavLink></NavItem>
								<NavItem><NavLink exact activeClassName='activeNav' to='/contact'>Contact Us</NavLink></NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				    <Routes/>
				    </div>
		   		</Router>
		   		</Col>
		    </Col>
					
		);
	}
}

export default App;