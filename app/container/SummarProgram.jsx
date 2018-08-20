import React from 'react';
import {
	Col,
	Image
} from 'react-bootstrap';

class SummarProgram extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='summar-program-wrapper'>
				<Col xs={12} className='summar-program-title'>
					<p>Summar Programs</p>
				</Col>
				<Col xs={12} className='summar-program-content'>
					<Col xs={12} className='comingsoon-img'><Image src="../img/programs/comingsoon.gif" responsive rounded /></Col>
				</Col>
			</Col>
		);
	}
}

export default SummarProgram;