import React from 'react';
import {
	Col,
	Thumbnail
} from 'react-bootstrap';

class DayCare extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='day-care-wrapper'>
				<Col xs={12} className='day-care-title'>
			  		<p>Toddz Crèche / DayCare</p>
			  	</Col>
			  	<Col xs={12} className='day-care-content'>
			  		<Col xs={12} className='day-care-description'>
			  			<p>We provide daycare facility to your child from 8am to 8pm.  Our daycare service starts from 6months for a child. A working mother can restart her career after her maternity leave with a complete assurance that her child is in a loved, safe and secure environment. Also nursing mothers can visit the center anytime to feed her baby. We also provide food according to the parent’s advice which includes pumped breast milk. </p>
			  			<p>Babies and toddlers at our daycare center develop language and communication through interaction with others and through various developmental activities. The activities also enhance their sensory and motor skills in children along with social and personal skills. For babies, we play along with them and encourage them to achieve the desired milestones. </p>
			  		</Col>
			  		<Col xs={12} className='day-care-gallery'>
			  			<p className='day-care-gallery-title'>Day Care Gallery</p>
			  			<Col xs={6} md={3} sm={6} lg={3} className='day-care-gallery-files'>
							<Thumbnail src='../img/programs/day-care-1.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='day-care-gallery-files'>
							<Thumbnail src='../img/programs/day-care-2.png' alt='242x200'></Thumbnail>
						</Col>	
						<Col xs={6} md={3} sm={6} lg={3} className='day-care-gallery-files'>
							<Thumbnail src='../img/programs/day-care-3.png' alt='242x200'></Thumbnail>
						</Col>	
						<Col xs={6} md={3} sm={6} lg={3} className='day-care-gallery-files'>
							<Thumbnail src='../img/programs/day-care-4.png' alt='242x200'></Thumbnail>
						</Col>		  			
			  		</Col>
			  		{/*<Col xs={12} md={4} lg={4}>
			  			<img src='../img/programs/day-care-1.png' className='day-care-content-1'/>
			  		</Col>
			  		<Col xs={12} md={4} lg={4} className='day-care-content-2'>
			  			<p>
			  			  We provide daycare facility to your child from 8am to 8pm.  Our daycare service starts from 6months for a child. A working mother can restart her career after her maternity leave with a complete assurance that her child is in a loved, safe and secure environment. Also nursing mothers can visit the center anytime to feed her baby. We also provide food according to the parent’s advice which includes pumped breast milk. Babies and toddlers at our daycare center develop language and communication through interaction with others and through various developmental activities. The activities also enhance their sensory and motor skills in children along with social and personal skills. For babies, we play along with them and encourage them to achieve the desired milestones. 
						</p>
			  		</Col>
			  		<Col xs={12} md={4} lg={4}>
			  			<img src='../img/programs/day-care-3.png' className='day-care-content-3'/>
			  		</Col>*/}
			  	</Col>
			</Col>
		);
	}
}

export default DayCare;