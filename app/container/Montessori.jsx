import React from 'react';
import {
	Col,
	Thumbnail
} from 'react-bootstrap';

class Montessori extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='montessori-wrapper'>
			  <Col xs={12} className='montessori-title'>
			    Montessori School
			  </Col>
			  <Col xs={12} className='montessori-content'>
			  	<Col xs={12} className='montessori-description'>
			  		<p>
			  			Fun Toddz Montessori school service starts for children above 2years. At our Montessori school, we follow learning through Dr. Montessori’s teaching. <span>A child led approach</span> is followed here.			  			
			  		</p>
			  		<p>Our curriculum is designed in such a way that it develops <span>sensory, language, cognitive, fine and gross motor skills</span> in children. The teaching materials at our center provide best learning for your child and form a great academic base. It enhances their concentration and coordination with best guidance from our well trained teaching staff.</p>
			  		<p>
			  			Our approach is very different from traditional schools where learning at our Montessori school is <span>individually designed</span> for a particular child. We do not follow a strict curriculum for a child. A child is set free with their individually designed project (like language or arithmetic for example), where the child can learn, repeat, and make mistakes, correct mistakes. This approach helps the child to get very confident on a particular subject. This is very important because, if not corrected earlier, the fear of a subject can be carried out through later years too. 
			  		</p>
			  		<p>
			  			At our center, the areas of learning we concentrate are:
			  		</p>
			  		<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Sensorial</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Practical life</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Arts & crafts</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Language</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Mathematics</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Social& cultural</span>
					</Col>
			  	</Col>
			  	<Col xs={12} className='montessori-gallery'>
			  		<p className='montessori-gallery-title'>Post School Activities Gallery</p>
			  		<Col xs={6} md={3} sm={6} lg={3} className='montessori-gallery-files'>
						<Thumbnail src='../img/programs/montessori-1.png' alt='242x200'></Thumbnail>
					</Col>
					<Col xs={6} md={3} sm={6} lg={3} className='montessori-gallery-files'>
						<Thumbnail src='../img/programs/montessori-2.png' alt='242x200'></Thumbnail>
					</Col>
					<Col xs={6} md={3} sm={6} lg={3} className='montessori-gallery-files'>
						<Thumbnail src='../img/programs/montessori-3.png' alt='242x200'></Thumbnail>
					</Col>
					<Col xs={6} md={3} sm={6} lg={3} className='montessori-gallery-files'>
						<Thumbnail src='../img/programs/montessori-4.png' alt='242x200'></Thumbnail>
					</Col>
			  	</Col>
			  	{/*<Col xs={12} md={6} lg={6}>
		  			<img src='../img/programs/montessori-1.png' className='montessori-content-1'/>
		  		</Col>
		  		<Col xs={12} md={6} lg={6} className='montessori-content-2'>
		  			<p>
		  			  Fun Toddz Montessori school service starts for children above 2 years. At our Montessori school, we follow learning through Dr. Montessori’s teaching. <span>A child led approach</span> is followed here.
					</p>
					<p>
						Our curriculum is designed in such a way that it develops <span>sensory, language, cognitive, fine and gross motor skills</span> in children. The teaching materials at our center provide best learning for your child and form a great academic base. It enhances their concentration and coordination with best guidance from our well trained teaching staff.
					</p>
					<p>
						Our approach is very different from traditional schools where learning at our Montessori school is individually designed for a particular child. We do not follow a strict curriculum for a child. A child is set free with their <span>individually designed project</span> (like language or arithmetic for example), where the child can learn, repeat, and make mistakes, correct mistakes. This approach helps the child to get very confident on a particular subject. This is very important because, if not corrected earlier, the fear of a subject can be carried out through later years too.
					</p>
					<p>At our center, the areas of learning we concentrate are:</p>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Sensorial</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Practical life</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Arts & crafts</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Language</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Mathematics</span>
					</Col>
					<Col xs={12}>
						<span className='montessori-list-type'></span>
                        <span className='montessori-list-content'>Social & cultural</span>
					</Col>
		  		</Col>*/}
			  </Col>
			</Col>
		);
	}
}

export default Montessori;