import { h, Component } from 'preact';
import Loadable from 'react-loadable';

import ApiView from './ApiView';
import UnknownElement from '../UnknownElement';
import EndOfChapterView from './EndOfChapterView';

import { customElementTypes } from '../config';

// Define default elements that are always used
let elementTypes = {
    EndOfChapterView: EndOfChapterView,
};

// Dynamically import custom element components using react-loadable
customElementTypes.forEach(elem => {
    elementTypes[elem] = Loadable({
      loader: () => import(`../Element/${elem}/${elem}View`),
      loading() { return null },
    });
});


class ElementView extends Component {

    typeToComponent(logicProps) {
        /* renderType must be either 'view' or 'edit' */
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
        return (
            <div className='ElementView'>
                <ApiView data={this.props.data} handleReady={this.props.handleReady} render={(logicProps)=>(
                    <div>
                        {/* !this.props.isPreview && <UsageTracker data={this.props.data} /> */}
                        {this.typeToComponent(logicProps)}
                    </div>
                )}/>
            </div>
        );
    }
}

export default ElementView;