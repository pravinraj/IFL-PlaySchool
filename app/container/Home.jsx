import React from 'react';
import { Fade } from 'react-slideshow-image';
import {
	Col
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
		        	<p>What We Offer At Fun Toddz</p>
		        	<p>At the Austin Children’s Academy we strive to offer a full range of educational, care, and enrichment options for young families. These include time-customizable care for infants and toddlers, Montessori-based preschool and private kindergarten, as well as after-hours care and tutoring programs including transportation for grade schoolers. Our goal is to provide a welcoming and academically stimulating environment that feels like a home-away-from home.</p>
		        </Col>
			</Col>
		);
	}

}

export default Home;