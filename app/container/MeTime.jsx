import React from 'react';
import {
	Col,
	Thumbnail
} from 'react-bootstrap';

class MeTime extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='me-time-wrapper'>
				<Col xs={12} className='me-time-title'>
					<p>‘Me Time’ for Parents</p>
				</Col>
				<Col xs={12} className='me-time-content'>
					<Col xs={12} className='me-time-description'>
						<p>Yes, we do that too. You have to run some errands, have a movie to catch up or just need to get some extra hours of sleep or some time with your friends or partners – Do not feel guilty . Enroll your child in either our play gym program or ‘after school activities’ for few hours. We will keep your child engaged positively with no screen time or anything of those sorts in our safe and secure environment.</p>
						<p>Let your child play, interact with other kids and have a great time when you take care of yourself (which is very important).</p>
						<p>Because only when you are happy, you can keep your family happy and positive</p>
					</Col>
					<Col xs={12} className='me-time-gallery'>
						<p className='me-time-gallery-title'>‘Me Time’ for Parents Gallery</p>
						<Col xs={6} md={3} sm={6} lg={3} className='me-time-gallery-files'>
							<Thumbnail src='../img/programs/me-time-1.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='me-time-gallery-files'>
							<Thumbnail src='../img/programs/me-time-2.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='me-time-gallery-files'>
							<Thumbnail src='../img/programs/me-time-3.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='me-time-gallery-files'>
							<Thumbnail src='../img/programs/me-time-4.png' alt='242x200'></Thumbnail>
						</Col>
					</Col>
				</Col>
			</Col>
		);
	}
}

export default MeTime;