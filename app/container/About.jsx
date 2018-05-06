import React from 'react';
import {
	Col
} from 'react-bootstrap';

class About extends React.Component {

	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		console.log('inside submit');
		return(
			<Col xs={12} className='about-wrapper'>
				<Col xs={12} className='about-data-wrapper'>
				  <p>About</p>
				</Col>
			</Col>
		);
	}
}

export default About;	