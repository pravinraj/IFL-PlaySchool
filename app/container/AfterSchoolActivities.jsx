import React from 'react';
import {
	Col,
	Thumbnail
} from 'react-bootstrap';

class AfterSchoolActivities extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='after-school-activities-wrapper'>
				<Col xs={12} className='after-school-activities-title'>
					<p>Post School Activities</p>
				</Col>
				<Col xs={12} className='after-school-activities-content'>
					<Col xs={12} className='after-school-activities-description'>
						<p>Kids from any age group can be enrolled in our after school activity program. Our after school activity includes:</p>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Story telling session</span>
						</Col>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Puppet theatre</span>
						</Col>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Outdoor activities such as gardening, water pool, mud play and lot more</span>
						</Col>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Self Defense Classes</span>
						</Col>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Handwriting</span>
						</Col>
						<Col xs={12}>
							<span className='after-school-activities-list-type'></span>
	                        <span className='after-school-activities-list-content'>Phonetics</span>
						</Col>
					</Col>
					<Col xs={12} className='after-school-activities-gallery'>
						<p className='after-school-activities-gallery-title'>Post School Activities Gallery</p>
						<Col xs={6} md={3} sm={6} lg={3} className='after-school-activities-gallery-files'>
							<Thumbnail src='../img/programs/after-school-1.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='after-school-activities-gallery-files'>
							<Thumbnail src='../img/programs/after-school-2.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='after-school-activities-gallery-files'>
							<Thumbnail src='../img/programs/after-school-3.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='after-school-activities-gallery-files'>
							<Thumbnail src='../img/programs/after-school-4.png' alt='242x200'></Thumbnail>
						</Col>
					</Col>
				</Col>
			</Col>
		);
	}
}

export default AfterSchoolActivities;