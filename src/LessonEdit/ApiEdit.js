import { h, Component } from 'preact';

import { isValidAction } from '../scripts/utils';
import { EDIT_SAVE_INTERVAL } from '../scripts/globals';

class ApiEdit extends Component {

    constructor(props) {
        super(props);        
        this.timeLastSaved = Date.now();

        this.state = {
            timestamp: Date.now(),
        };

        // actionDict defines the set of possible actions that each individual edit/view component has access to.
        // an action can be executed by calling this.props.handleAction(action) from the edit/view component.
        // action must be an object which has properties type and value, where type is any of the properties of actionDict.
        this.actionDict = {
            save: (value) => {
                const now = Date.now();
                console.log('TODO: implement saving to backend');
                // TODO: save this.props.data.content somehwere and update timestamp
            },
        }

        this.handleAction = this.handleAction.bind(this);
    }

    handleAction(action) {
        isValidAction(action) ? this.actionDict[action.type](action.value) : null;
    }

    componentWillUnmount() {
        this.handleAction({type: 'save', value: undefined});
    }

    render(){
        const logicProps = {
            handleAction: this.handleAction,
        };
        return (
            this.props.render(logicProps)
        )
    }
}

export default ApiEdit;