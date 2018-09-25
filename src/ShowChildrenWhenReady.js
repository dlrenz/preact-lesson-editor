import { h, Component, cloneElement } from 'preact';

/*
This component shows a loading icon until at least one of its children executes the handleReady prop.
*/

class ShowChildrenWhenReady extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		}
		this.handleReady = this.handleReady.bind(this);
	}

    handleReady(isReady) {
        this.setState({ isReady });
    }

	render(){
		return(
			<div className='ShowChildrenWhenReady'>
				<div style={this.state.isReady?{display:'none'}:{display: 'inline'}} >
					<div style={{width: '100%', height: '80px', opacity: '0.6'}}>
						<center>
							Loading content...
						</center>
					</div>
				</div>
				<div style={this.state.isReady?{display:'inline'}:{display: 'none'}} >
					{cloneElement(this.props.children[0], { handleReady: this.handleReady })}
				</div>
			</div>
		)
	}
}

export default ShowChildrenWhenReady;