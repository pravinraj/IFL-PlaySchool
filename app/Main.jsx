import React from 'react';
import {
	Grid,
	Row,
	Col,
	Navbar,
	Nav,
	NavItem
} from 'react-bootstrap';


class Main extends React.Component {

	constructor(props){
		super(props);
		console.log('props!!!!!!! ',props);
	}

	componentWillMount(){
		console.log('hi@@@@');
		//this.props.history.push('/home?ijustgotpushed=true')
	}

	render(){
		return (
			<Col xs={12} className='app-header'>
				<Col xs={1}></Col>
				<Col xs={11}>
					<Navbar>
						<Nav>
							<NavItem eventKey={1} onClick={()=>this.props.history.push('/home')}>
						      Home
						    </NavItem>
						    <NavItem eventKey={2} onClick={()=>this.props.history.push('/about')}>
						      About
						    </NavItem>
						</Nav>
					</Navbar>
				</Col>
			</Col>
		);
	}

}

export default Main;