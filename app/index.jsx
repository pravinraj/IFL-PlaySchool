import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'react-bootstrap';
import { Button,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './index.css';



class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					<p>Hello World1</p>
					<ButtonToolbar>
						<Button bsStyle="success">Primary</Button>
					</ButtonToolbar>
				</div>
				<div className='secDiv'>
					This is second div
				</div>
			</div>
					
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);