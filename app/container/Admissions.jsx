import React from 'react';
import {
	Col
} from 'react-bootstrap';

class Admissions extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='admission-wrapper'>
				<Col xs={12} className='admission-title'>
					<p>Admission & Acadamics</p>
				</Col>				
			</Col>
		);
	}
}

export default Admissions;