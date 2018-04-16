import React from 'react';


class Home extends React.Component {

	constructor(props){
		super(props);
		console.log('props!!!!!!! ',props);
	}

	componentWillMount(){
		console.log('hi@@@@');
		this.props.history.push('/home?ijustgotpushed=true')
	}

	render(){
		return (
			<div>hi</div>
		);
	}

}

export default Home;