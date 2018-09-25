import { h, Component } from 'preact';

import ElementView from './ElementView';
import ShowChildrenWhenReady from '../ShowChildrenWhenReady';

import { defaultElems } from '../globals';


class LessonView extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    elements: defaultElems,
		};
	}

	render() {
	return (
	  <div className="LessonView">
	    {this.state.elements.map((el, idx) => {
	            return (
                    <ShowChildrenWhenReady>
	                    <ElementView key={el.id} data={el}/>
                    </ShowChildrenWhenReady>
	            )
	        }
	    )}
	  </div>
	);
	}
}

export default LessonView;
