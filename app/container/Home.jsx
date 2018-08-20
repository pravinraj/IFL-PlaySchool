import React from 'react';
import { Fade } from 'react-slideshow-image';
import {
	Col,
	Thumbnail,
	Button
} from 'react-bootstrap';

class Home extends React.Component {

	constructor(props){
		super(props);
		this.state={
			images: [			
			'../img/home/slideshow-1.png',
			'../img/home/slideshow-3.png',
			'../img/home/slideshow-4.png',
			'../img/home/slideshow-5.png'		
			]
		};
	}

	render(){
		return(
			<Col xs={12} className='home-wrapper'>
				<div>
					<Col xs={12} className='slideshow'>
						<Fade
				          images={this.state.images}
				          duration={5000}
				          transitionDuration={1000}
				          className ='fade-effect'
				        />
			        	<div className='wordings'>
			        		<div>
			        			<p>{'Play & Learn how to'}</p>
			        		</div>
			        		<div>
			        			<p>Create New Things</p>
			        		</div>
			        		<div>
			        			<p onClick={()=>{this.props.history.push('/admissions')}}>Read More >></p>
			        		</div>
			        	</div>
			        </Col>
		        </div>
		        <Col xs={12} className='home-special'>
		        	<Col xs={12} className='home-special-offer'>
		        		<p>What We Offer At Fun Toddz</p>
		        		<p>At Fun Toddz, we strive to offer a full range of educational, care and enrichment options for young families. These include time-customizable care for toddlers, Play Gym and Montessori-based preschool, as well as after-hours care and 'Me time' for parents at secured environment. Our goal is to provide a welcoming and academically stimulating environment that feels like a home-away-from home.</p>
		        	</Col>
		        	<Col xs={12} className='play-school-programmes'>
		        		<Col xs={12} md={4} sm={12} lg={4}>
		        			<Thumbnail src='../img/home/day-care-4.png' alt='242x200'>
				        		<p>Crèche/Daycare</p>
				        		<p>We provide daycare facility to your child from 8am to 8pm.  Our daycare service starts from 6months for a child. A working mother can restart her career after her maternity leave with a complete assurance that her child is in a loved, safe and secure environment.</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/daycare')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
		        		</Col>
			        	<Col xs={12} md={4} sm={12} lg={4}>
			        		<Thumbnail src='../img/home/montessori-3.png' alt='242x200'>
				        		<p>Montessori School</p>
				        		<p>Fun Toddz Montessori school service starts for children above 2years. At our Montessori school, we follow learning through Dr. Montessori’s teaching. Our curriculum is designed in such a way that it develops sensory, language, cognitive, fine and gross motor skills.</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/montessori')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
			        	<Col xs={12} md={4} sm={12} lg={4}>
			        		<Thumbnail src='../img/home/playgym-12.png' alt='242x200'>
				        		<p>Play Gym</p>
				        		<p>We provide play gym services for babies from 3 months to kid’s up to 5 yrs of age. For babies from 3 months to 1.5yrs, a mother-child program is conducted every alternate day.We have the newest play equipments which let the child play in a very safe environment.</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/playgym')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
			        	<Col xs={12} md={4} sm={12} lg={4}>
		        			<Thumbnail src='../img/home/after-school-activities.png' alt='242x200'>
				        		<p>Post School Activities</p>
				        		<p>Kids from any age group can be enrolled in our after school activity program. Our after school activity includes Story telling session, Puppet theatre, Outdoor activities such as gardening, water pool, mud play and lot more, Self Defense Classes, Handwriting, Phonetics</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/post-school-activities')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
		        		</Col>
			        	<Col xs={12} md={4} sm={12} lg={4}>
			        		<Thumbnail src='../img/home/me-time.png' alt='242x200'>
				        		<p>‘Me Time’ for Parents</p>
				        		<p>Yes, we do that too. You have to run some errands, have a movie to catch up or just need to get some extra hours of sleep or some time with your friends or partners – Do not feel guilty . Enroll your child in either our play gym program or ‘after school activities’.</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/me-time')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
			        	<Col xs={12} md={4} sm={12} lg={4}>
			        		<Thumbnail src='../img/home/summar-camp.png' alt='242x200'>
				        		<p>Summer Programs</p>
				        		<p>Are your children interested in coding? Archeology? Puzzles? We offers dozens of summer programs to feed any child’s wildest interests. You can choose 2-day, 3-day or 5-day programs as well as half-day (8:30 am – 12 noon), full-day or extended days (7:30 am – 6:00 pm).</p>
				          		<Button bsStyle='primary' onClick={()=>{this.props.history.push('/programs/summar-camp')}}>LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
		        	</Col>
		        	
		        </Col>
		        <Col xs={12} className='home-enroll'>
		        	<Col xs={12} md={10} sm={10} lg={10}>
		        		<p>How To Enroll Your Child In A class ?</p>
		        		<p>To enroll young Toddlers at Fun Toddz, please visit our Fun Toddz and contact us</p>
		        	</Col>
		        	<Col xs={12} md={2} sm={2} lg={2}>
		        		<Button bsStyle='info' onClick={()=>{this.props.history.push('/contact')}}><span>Contact Now >></span></Button>
		        	</Col>
		        </Col>
		        <Col xs={12} className='home-footer'>
		        	<Col xs={12} lg={4} sm={4} md={4}>
		        		<p>Our Programs</p>
		        		<Col xs={12} className='program-list'>		        			
		        			<Col xs={4}>
		        				<Button bsStyle='success' onClick={()=>{this.props.history.push('/admissions')}}>T</Button>
		        				<p>Toddler</p>
		        			</Col>
		        			<Col xs={4}>
		        				<Button bsStyle='success' onClick={()=>{this.props.history.push('/admissions')}}>K</Button>
		        				<p>Kindergarten</p>
		        			</Col>
		        			<Col xs={4}>
		        				<Button bsStyle='success' onClick={()=>{this.props.history.push('/admissions')}}>C</Button>
		        				<p>Camps</p>
		        			</Col>
		        		</Col>
		        	</Col>
		        	<Col xs={12} lg={4} sm={4} md={4}>
		        		<p>Like Us! Follow Us!</p>
		        		<Col xs={12} className='social-media-link'>
		        			<Col xs={12}>
		        			  <a href='https://www.facebook.com/FunToddz/' target='_blank'>
		        				<Button bsStyle='success'>f</Button>
		        			  </a>
		        			</Col>
		        			{/*<Col xs={6} className='twitter-link'>
		        				<Button bsStyle='success'><span></span></Button>
		        			</Col>*/}
		        		</Col>
		        	</Col>
		        	<Col xs={12} lg={4} sm={4} md={4}>
		        		<p>Contact Us</p>
		        		<div className='mail-us'>
			        		<span></span>
			        		<span>funtoddz@gmail.com</span>
		        		</div>
		        		<div className='address-us'>
		        			<span></span>
		        			<span>No 4/2, Subramanian Street, Perambur, Chennai-600011</span>
		        		</div>
		        	</Col>
		        </Col>
			</Col>
		);
	}

}

export default Home;