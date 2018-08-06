import React from 'react';
import {
	Col,
	Thumbnail
} from 'react-bootstrap';

class PlayGym extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='play-gym-wrapper'>
				<Col xs={12} className='play-gym-title'>
					<p>Play Gym</p>
				</Col>
				<Col xs={12} className='play-gym-content'>
					<Col xs={12} className='play-gym-description'>
						<p>
							We provide play gym services for babies from 3 months to kid’s up to 5 yrs of age. For babies from 3 months to 1.5yrs, a mother-child program is conducted every alternate day. 
						</p>
						<p>
							We have the newest play equipments which let the child play in a very safe environment thus developing the muscle strength in toddlers and helps achieve milestone in babies.
						</p>
						<p>
							The play gym environment positively channelizes the energy in an active child. It encourages the child to play and also develops gross motor and social skills when playing and interacting with other children. 
						</p>
						<p>
							Our play gym is an instant hit with children of any age group. They will just love coming here to play and explore. 
						</p>
					</Col>
					<Col xs={12} className='play-gym-gallery'>
						<p className='play-gym-gallery-title'>Play Gym Infrastructure</p>						
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-2.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-3.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-4.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-7.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-5.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-8.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-9.png' alt='242x200'></Thumbnail>
						</Col>
						<Col xs={6} md={3} sm={6} lg={3} className='play-gym-gallery-files'>
							<Thumbnail src='../img/programs/playgym-13.png' alt='242x200'></Thumbnail>
						</Col>					
					</Col>
				</Col>
			</Col>
		);
	}
}

export default PlayGym;