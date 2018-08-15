import React from 'react';
import {
	Col,
	FormGroup,
	FormControl,
	Button
} from 'react-bootstrap';

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state={
			nameValue: '',
			mailValue:'',
			textareaMessage:'',
			enCodedTextArea:'',
			validName: false,
			validEmail: false,
			enableButton: false
		};
		this.mailToString = '';
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMailChange = this.handleMailChange.bind(this);
		this.handleTextAreaMessage  = this.handleTextAreaMessage.bind(this);
		this.invalidFormHandler = this.invalidFormHandler.bind(this);
	}

	handleNameChange(e) {
      this.setState({
      	nameValue: e.target.value,
      	validName: (e.target.value.length>0) ? true : false
   	  });
    }
    handleMailChange(e){
    	let pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'; 
    	let strMatch = e.target.value.match(pattern);
    	
    	this.setState({ 
    		mailValue: e.target.value,
    		validEmail: e.target.value.match(pattern) ? true : false,
    		enableButton: (this.state.validName && e.target.value.match(pattern)) ? true : false
    	});
    	this.mailToString='mailto:funtoddz@gmail.com?cc='+e.target.value+'&subject='+encodeURIComponent('Customer Queries - '+ this.state.nameValue)
    }

    handleTextAreaMessage(e){
    	this.setState({ 
    		textareaMessage: e.target.value  		
    	});
    	let enCodedTextArea = encodeURIComponent(e.target.value);
    	this.mailToString='mailto:funtoddz@gmail.com?cc='+this.state.mailValue+'&subject='+encodeURIComponent('Customer Queries - '+ this.state.nameValue)+'&body='+enCodedTextArea;
    }

    invalidFormHandler(){
    	console.log('invalid form handler');
    }

	render(){
		let googleMapAddress = 'https://maps.google.com/?q=4, 2, Subramaniam Road, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu';
		return(
			<Col xs={12} className='contact-us-wrapper'>
				<Col xs={12} className='contact-us-title'>
			  		<p>How To Reach Us</p>
			  	</Col>
			  	<Col xs={12} className='contact-us-content-wrapper'>
			  		<Col xs={12} className='contact-us-content-title'>
			  			<p>We'd <span>&#9825;</span> to help</p>
			  			<p>We like to create things with fun, open-minded people. Feel free to say Hello</p>
			  		</Col>
			  		<Col xs={12} sm={12} lg={8} md={8} className='contact-us-box'>
			  			<form>
				  			<FormGroup
					          controlId='formBasicText'
					          bsClass='form-group name-box'
					        >
					        	<FormControl
					              type='text'
					              value={this.state.nameValue}
					              placeholder='Your Name'
					              onChange={this.handleNameChange}
					              autoComplete='off'
					              maxLength={'20'}
					              required 
					            />				            		        	
					        </FormGroup>
					        <FormGroup
					          controlId="formBasicText"
					          bsClass='form-group name-box'
					        >
					        	<FormControl
					              type='email'
					              value={this.state.mailValue}
					              placeholder='Email'
					              onChange={this.handleMailChange}
					              autoComplete='off'
					              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'
					              required
					            />				            		        	
					        </FormGroup>

					        <FormGroup 
					          controlId='formControlsTextarea' 
					          bsClass='form-group textarea'
					        >						      
						      <FormControl 
						        componentClass='textarea' 
						        placeholder='Message'
						        value ={this.state.textareaMessage}
						        onChange= {this.handleTextAreaMessage}
						        maxLength={'200'}
						        pattern={'.*'}
						        required
						      />
						    </FormGroup>
						    {!this.state.enableButton && <p className='alert-message'>* Please fill your Name and your valid Email ID to proceed</p>}
						    <Button 
						      bsStyle='info'
						      disabled ={!this.state.enableButton}
						    >						    	
						    	{(this.state.validName && this.state.validEmail) ?
						    	 (
						    	 	<a href={this.mailToString} 
						    	 	target='_top'>
						    	    Send
						    	</a>) :(<span>Send</span>)}
						    </Button>
				        </form>
			  		</Col>
			  		<Col xs={12} sm={12} lg={4} md={4} className='contact-us-details'>
			  			<Col xs={12} className='address-details'>
			  				<span><a href={googleMapAddress} target='_blank'/></span>
			  				<span>No 4/2, Subramanian Street, Perambur, Chennai-600011</span>
			  			</Col>
			  			<Col xs={12} className='mail-details'>
			  				<span><a href='mailTo:funtoddz@gmail.com' target='_top'/></span>
			  				<span>funtoddz@gmail.com</span>
			  			</Col>
			  			<Col xs={12} className='phone-details'>
			  				<span></span>
			  				<span>+91-9791167467, +91-9962983672</span>
			  			</Col>
			  			<Col xs={12} className='fb-details'>
			  				<span>
			  					<a href='https://www.facebook.com/FunToddz/' target='_blank'>
			  						<Button bsStyle='success'>f</Button>
			  					</a>
			  				</span>
			  				<span>Like Us/Follow Us</span>
			  			</Col>
			  		</Col>
			  	</Col>
			</Col>
		);
	}
}

export default Contact;