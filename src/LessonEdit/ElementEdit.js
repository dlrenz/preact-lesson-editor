import { h, Component } from 'preact';
import Loadable from 'react-loadable';

import ApiEdit from './ApiEdit';
import UnknownElement from '../UnknownElement';
import EndOfChapterEdit from './EndOfChapterEdit';

import { capitalize } from '../scripts/utils';
import { customElementTypes } from '../config';

// Define default elements that are always used
let elementTypes = {
    EndOfChapterEdit: EndOfChapterEdit,
};

// Dynamically import custom element components using react-loadable
customElementTypes.forEach(elem => {
    elementTypes[elem] = Loadable({
      loader: () => import(`../Element/${elem}/${elem}Edit`),
      loading() { return null },
    });
});


class ElementEdit extends Component {

    constructor(props){
        super(props);
    }

    typeToComponent(logicProps) {
        const props = Object.assign({
            key: this.props.data.id,
            id: this.props.data.id,
            type: this.props.data.type,
            data: this.props.data,
            //chapters: this.props.chapters.map(c => ({title: c.title, id: c.id})),
            activeChapterIndex: this.props.activeChapterIndex,
            handleReady: this.props.handleReady,
        }, logicProps);

        if (customElementTypes.includes(this.props.data.type)) {
            const elemName = this.props.data.type;
            return h(elementTypes[elemName], props, null);
        }
        return h(UnknownElement, props, null);
    }

    render() {
        // TODO: Import stuff from FadeableCard here!
        const {id, type} = this.props.data;
        return (
            <div className='ElementEdit'>
                <ApiEdit data={this.props.data} render={(logicProps)=>(
                    this.typeToComponent(logicProps)
                )}/>
            </div>
        );
    }
}

export default ElementEdit;