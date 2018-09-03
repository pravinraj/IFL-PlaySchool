import React from 'react';
import {
	Col,
	Tab,
	Tabs,
	Row,
	Nav,
	NavItem,
	Image
} from 'react-bootstrap';

class Admissions extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}	

	render(){
		return(
			<Col xs={12} className='admission-wrapper'>
				<Col xs={12} className='admission-title'>
					<p>Admission & Acadamics</p>
				</Col>
				<Col xs={12} className='admission-content'>
					<Col xs={12} className='tab-data'>
						<Tab.Container id='tab-container-data' defaultActiveKey='first'>
						  <Row className='clearfix'>
						    <Col xs={6} sm={5} lg={3} md={3} className='tab-list'>
						      <Nav bsStyle='pills' stacked>
						        <NavItem eventKey='first'>Montessori</NavItem>
						        <NavItem eventKey='second'>Play Gym</NavItem>
						        <NavItem eventKey='third'>Day Care</NavItem>
						        <NavItem eventKey='fourth'>After School Activities</NavItem>
						        <NavItem eventKey='fifth'>"Me Time" for Parents</NavItem>
						      </Nav>
						    </Col>
						    <Col xs={6} sm={7} lg={9} md={9} className='tab-list-content'>
						      <Tab.Content animation>
						        <Tab.Pane eventKey='first'>
						        	<Col xs={12} className='montessori-content'>
						        		<p>Montessori school starts for children above 2 years. A child led approach is followed based on Dr. Montessori Teaching.</p>
						        		<p>Areas of Learning</p>
						        		<ul>
						        			<li>Sensorial</li>
						        			<li>Practical Life</li>
						        			<li>Arts & Crafts</li>
						        			<li>Language</li>
						        			<li>Social & Cultural</li>
						        		</ul>
						        		<p className='areas-of-development'>Areas of Development</p>
						        		<ul>
						        			<li>Sensory</li>
						        			<li>Language</li>
						        			<li>Cognitive Skill</li>
						        			<li>Fine & Gross Motor Skills</li>
						        		</ul>							
						        	</Col>
						        </Tab.Pane>
						        <Tab.Pane eventKey='second'>
						        	<Col xs={12} className='play-gym-content'>
						        		<ul>
						        			<li>Play Gym Program / Parent Child Program for kids from 3 months to 5 years</li>
						        			<li>Positive energy channelization of a active child</li>
						        			<li>Development of muscle strength & milestone achievements.</li>
						        		</ul>
						        	</Col>
						        </Tab.Pane>
						        <Tab.Pane eventKey='third'>
						        	<Col xs={12} className='day-care-content'>
						        		<ul>
						        			<li>Day Care facility from 8AM to 8PM.</li>
						        			<li>Age Group : 6 Months +</li>
						        			<li>Loved, Safe & Secure environment for your child</li>
						        			<li>A great ambience with plenty of fresh air, light ventilation.</li>
						        		</ul>
						        	</Col>
						        </Tab.Pane>
						        <Tab.Pane eventKey='fourth'>
						        	<Col xs={12} className='after-school-activities-content'>
						        		<ul>
						        			<li>Story telling session</li>
						        			<li>Puppet theater</li>
						        			<li>Self defense classes</li>
						        			<li>Handwriting Class</li>
						        			<li>Phonetics</li>
						        			<li>Outdoor activities such as gardening, water pool & mud play</li>
						        		</ul>
						        	</Col>
						        </Tab.Pane>
						        <Tab.Pane eventKey='fifth'>
						        	<Col xs={12} className='me-time-content'>
						        		<ul>
						        			<li>Enroll child in play gym program or after school activities</li>
						        			<li>Let your child play, interact, socialize with kids when you take care of yourself ?</li>						        			
						        		</ul>
						        	</Col>
						        </Tab.Pane>
						      </Tab.Content>
						    </Col>
						  </Row>
						</Tab.Container>
					</Col>
					<Col xs={12} className='admission-details'>
						<p>To enroll your child at Fun Toddz, <span onClick={()=>{this.props.history.push('/contact')}}>Contact Us now.</span> We require the child and the parents to be present at the time of admission.</p>
						<p>Detailed Acadamic and Admission Details</p>						
					</Col>
					<Col xs={12} className='form-details'>
						<Col xs={6} sm={6} lg={3} md={3}><a href='doc/Fun_Toddz_Admission_Form.pdf'  target='_blank'>Admission-form</a></Col>
						<Col xs={6} sm={6} lg={3} md={3}><a href='doc/Fun_Toddz_Enquiry_Form.pdf'  target='_blank'>Enquiry-form</a></Col>
						<Col xs={6} sm={6} lg={3} md={3}><a href='doc/Fun_Toddz_prekg_syllabus.pdf'  target='_blank'>Montessori-syllabus</a></Col>
						<Col xs={6} sm={6} lg={3} md={3}><a href='doc/FT1.pdf'  target='_blank'>E-Brochure</a></Col>
					</Col>
				</Col>				
			</Col>
		);
	}
}

export default Admissions;