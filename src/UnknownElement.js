import { h, Component } from 'preact';

class UnknownElement extends Component {

	constructor(props) {
		super(props);
		this.props.handleReady(true);
	}
	
	render() {
		return (
			<div key={Math.round(1000000*Math.random()).toString(10)}>
				Could not render element of type {this.props.data.type} (unknown element type) 
			</div>
		)
	}
}

export default UnknownElement;