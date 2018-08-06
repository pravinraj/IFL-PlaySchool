import React from 'react';
import {
	Col
} from 'react-bootstrap';

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='contact-us-wrapper'>
				<Col xs={12} className='contact-us-title'>
			  		<p>How To Reach Us</p>
			  	</Col>
			</Col>
		);
	}
}

export default Contact;