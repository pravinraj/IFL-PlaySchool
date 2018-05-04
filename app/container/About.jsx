import React from 'react';
import {
	Col
} from 'react-bootstrap';

class About extends React.Component {

	constructor(props){
		super(props);
		this.state={};
		this.submitReceipe = this.submitReceipe.bind(this);
	}

	submitReceipe(){
		console.log('button clicked');
		this.props.history.push('/');
	}

	render(){
		console.log('inside submit');
		return(
			<Col xs={12} className='about-wrapper'>
				<Col xs={12} className='about-data-wrapper'>
				  <p>About</p>
				</Col>
				<Col xs={12} className='mission-data-wrapper'>
				  <p>Mission</p>
				</Col>
				<Col xs={12} className='vission-data-wrapper'>
				  <p>Vission</p>
				</Col>
			</Col>
		);
	}
}

export default About;	