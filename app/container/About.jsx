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
				  <p>Who We Are</p>
				</Col>
				<Col xs={12} className='about-contents'>
					<Col xs={6} className='about-contents-image'></Col>
					<Col xs={6} className='about-contents-data'>
						<p>Fun Toddz located at Perambur, Chennai is a professionally managed child center operational from 8am to 8pm on all days of the week. We provide the best care of your child by giving them unconditional love nurture them and guide them through their early years.</p>
						<p>At Fun Toddz, a child’s safety and hygiene is given the utmost importance. The early years of a child are very important in terms of teaching them right values and early learning. We patiently guide them through the journey at Fun Toddz.</p>
						<p>Fun Toddz is located at Perambur, Chennai. We have ample inside and outside space which lets the child play and learn through play.  Our center has both traditional and newest play equipments. The ambience at our center provides plenty of fresh air, light and ventilation.</p>
						<Col xs={12} className='about-services'>
							<p>Services at our Center</p>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/montessori')}}>Montessori School</span>
							</Col>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/daycare')}}>Crèche’/Day Care</span>
							</Col>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/playgym')}}>Play Gym</span>
							</Col>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/post-school-activities')}}>After School Care</span>
							</Col>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/post-school-activities')}}>After School Activities</span>
							</Col>
							<Col xs={12}>
								<span className='about-services-list-type'></span>
								<span className='about-services-contents' onClick={()=>{this.props.history.push('/programs/me-time')}}>‘Me Time’ for Parents</span>
							</Col>
						</Col>
					</Col>
				</Col>
			</Col>
		);
	}
}

export default About;	