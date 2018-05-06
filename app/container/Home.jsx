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
			'../img/slideshow3.png',
			'../img/slideshow4.png',
			'../img/slideshow5.png'
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
				        />
			        	<div className='wordings'>
			        		<div>
			        			<h1>{'Play & Learn how to'}</h1>
			        		</div>
			        		<div>
			        			<h2>Create New Things</h2>
			        		</div>
			        		<div>
			        			<h4>Read More >></h4>
			        		</div>
			        	</div>
			        </Col>
		        </div>
		        <Col xs={12} className='home-special'>
		        	<Col xs={12} className='home-special-offer'>
		        		<p>What We Offer At Fun Toddz</p>
		        		<p>At the Austin Children’s Academy we strive to offer a full range of educational, care, and enrichment options for young families. These include time-customizable care for infants and toddlers, Montessori-based preschool and private kindergarten, as well as after-hours care and tutoring programs including transportation for grade schoolers. Our goal is to provide a welcoming and academically stimulating environment that feels like a home-away-from home.</p>
		        	</Col>
		        	<Col xs={12} className='play-school-programmes'>
		        		<Col xs={4}>
		        			<Thumbnail src="../img/home/block1.png" alt="242x200">
				        		<p>Infants 3 mos to 18 mos</p>
				        		<p>These early months are crucial for cognitive, sensory, and motor skill development, all of which best occurs in an atmosphere of safe, warm, loving trust. Our caregiver’s first objective is to nurture those bonds by responding to each child’s needs as they arise. Feeling comforted and confident, your child will venture forward to explore their brave new world.</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
		        		</Col>
			        	<Col xs={4}>
			        		<Thumbnail src="../img/home/block2.png" alt="242x200">
				        		<p>Toddler 18 mos to 3 yrs</p>
				        		<p>Active toddlers experience meteoric cognitive and motor-skill growth during their time in our customized, toddler-safe Cedar Park preschool classrooms. In this program, you’ll witness him or her becoming more independent, self-reliant, and socially adept. More importantly, they will develop the confidence to follow the path of his curiosity and embrace a love of learning.</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
			        	<Col xs={4}>
			        		<Thumbnail src="../img/home/block3.png" alt="242x200">
				        		<p>Primary 3 yrs to 6 yrs</p>
				        		<p>One of the unique features of a Montessori school is multi-age classrooms. Older students model appropriate behavior and guide their younger peers, all while making academic advancements of their own. Studies have shown that the Montessori Method provides a solid academic basis as well as exceptional social skills that prepare children well for kindergarten.</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
		        	</Col>
		        	<Col xs={12} className='play-school-programmes'>
		        		<Col xs={4}>
		        			<Thumbnail src="../img/home/block4.png" alt="242x200">
				        		<p>Private Kindergarten In Cedar Park</p>
				        		<p>Kindergarten is a pivotal year. Here at ACA, our Montessori-certified teachers introduce academic subjects such as language arts, math, Spanish, science, social studies, and geography. But we also focus on the qualities that will serve your child throughout life, such as kindness, empathy, determination, self-reliance, initiative, and most of all, an innate love of learning.</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
		        		</Col>
			        	<Col xs={4}>
			        		<Thumbnail src="../img/home/block5.png" alt="242x200">
				        		<p>After-School Pick Up and Tutoring</p>
				        		<p>Not all after-hours child care programs are the same. At ACA, we offer a transportation service that will deliver children door-to-door from grade school to ACA. Once here, they enjoy free play, a healthy snack, and rotating enrichment programs. Montessori-certified teachers are also on hand during tutoring hour should your child need homework help.</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
			        	<Col xs={4}>
			        		<Thumbnail src="../img/home/block6.png" alt="242x200">
				        		<p>Part-time/Summer Programs</p>
				        		<p>Are your children interested in coding? Archeology? Puzzles? Puppet Making? Gardening? ACA offers dozens of part-time and summer programs to feed any child’s wildest interests. Flexible planning means you can choose 2-day, 3-day, or 5-day programs as well as half-day (8:30 am – 12 noon), full-day, or extended days (7:30 am – 6:00 pm).</p>
				          		<Button bsStyle="primary">LEARN MORE >> </Button>
				      		</Thumbnail>
			        	</Col>
		        	</Col>
		        </Col>
		        <Col xs={12} className='home-enroll'>
		        	<Col xs={10}>
		        		<p>How To Enroll Your Child In A class ?</p>
		        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
		        	</Col>
		        	<Col xs={2}>
		        		<Button bsStyle="info"><span>Contact Now >></span></Button>
		        	</Col>
		        </Col>
		        <Col xs={12} className='home-footer'>
		        	<Col xs={4}>
		        		<p>Our Programs</p>
		        		<Col xs={12} className='program-list'>
		        			<Col xs={3}>
		        				<Button bsStyle="success">I</Button>
		        				<p>Infant</p>
		        			</Col>
		        			<Col xs={3}>
		        				<Button bsStyle="success">T</Button>
		        				<p>Toddler</p>
		        			</Col>
		        			<Col xs={3}>
		        				<Button bsStyle="success">K</Button>
		        				<p>Kindergarten</p>
		        			</Col>
		        			<Col xs={3}>
		        				<Button bsStyle="success">C</Button>
		        				<p>Camps</p>
		        			</Col>
		        		</Col>
		        	</Col>
		        	<Col xs={4}>
		        		<p>Like Us! Follow Us!</p>
		        		<Col xs={12} className='social-media-link'>
		        			<Col xs={6}>
		        				<Button bsStyle="success">f</Button>
		        			</Col>
		        			<Col xs={6} className='twitter-link'>
		        				<Button bsStyle="success"><span></span></Button>
		        			</Col>
		        		</Col>
		        	</Col>
		        	<Col xs={4}>
		        		<p>Contact Us</p>
		        	</Col>
		        </Col>
			</Col>
		);
	}

}

export default Home;