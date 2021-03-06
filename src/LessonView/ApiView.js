import { h, Component } from 'preact';

import { isValidAction } from '../scripts/utils';

class ApiView extends Component {

    constructor(props) {
        super(props);

        // actionDict defines the set of possible actions that each individual edit/view component has access to.
        // an action can be executed by calling this.props.handleAction(action) from the edit/view component.
        // action must be an object which has properties type and value, where type is any of the properties of actionDict.
        this.actionDict = {
            notify: (value) => {
                //this.props.sendSnackbarMessage(value)
            },
            changeChapter: (value) => {
                //this.props.handleChapterChange(value, undefined);
            },
        }

        this.handleAction = this.handleAction.bind(this);

    }

    handleAction(action) {
        if(isValidAction(action))
            this.actionDict[action.type](action.value);
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

export default ApiView;