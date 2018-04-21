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
				<div className='slideshow'>
					<Fade
			          images={this.state.images}
			          duration={5000}
			          transitionDuration={1000}
			        />
		        	<div className='wordings'>
		        		<div>
		        			<h1>{'Play & Learn how to'}</h1>
		        		</div>
		        	</div>
		        </div>
			</Col>
		);
	}

}

export default Home;