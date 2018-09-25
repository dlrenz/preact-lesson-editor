import { h, Component } from 'preact';

import ElementEdit from './ElementEdit';
import ShowChildrenWhenReady from '../ShowChildrenWhenReady';

import { defaultElems } from '../globals';

class LessonEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    elements: defaultElems,
		};
	}

	render() {
	return (
	  <div className="LessonEdit">
	    {this.state.elements.map((el, idx) => {
	            return (
                    <ShowChildrenWhenReady>
	                    <ElementEdit key={el.id} data={el}/>
                    </ShowChildrenWhenReady>
	            )
	        }
	    )}
	  </div>
	);
	}
}

export default LessonEdit;
