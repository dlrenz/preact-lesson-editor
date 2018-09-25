import { h, Component } from 'preact';
import Loadable from 'react-loadable';

import ViewApi from './ViewApi';
import EditApi from './EditApi';
import UnknownElement from './UnknownElement';
import FadeableCard from './FadeableCard';

//import EndOfChapterView from '../EndOfChapterView';
//import EndOfChapterEdit from '../EndOfChapterEdit';
import { capitalize } from '../utils';

// Define default elements that are always used
let elementTypes = {
    //EndOfChapterView: EndOfChapterView,
    //EndOfChapterEdit: EndOfChapterEdit,
};

// Define which custom element types to use here. Each element type <ElemType> needs to reside in its 
// own subfolder and expose two components, one for viewing ('./<ElemType>/<ElemType>View') and one for 
// editing ('./<ElemType>/<ElemType>Edit'). Example: The 'Text' element must live in the 'Text' subfolder, 
// which must contain 'TextView.js' and 'TextEdit.js'.
const customElementTypes = [
    'Text'
];

// Dynamically import custom element components using preact-loadable
customElementTypes.forEach(elem => {
    ['View', 'Edit'].forEach(variant => {
        elementTypes[elem+variant] = new Loadable({
          loader: () => import(`./${elem}/${elem}${variant}`),
          loading() { return null },
        });
    });
});


class Element extends Component {

    constructor(props){
        super(props);
    }

    typeToComponent(logicProps, renderType) {
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
            const elemName = this.props.data.type+capitalize(renderType);
            return h(elementTypes[elemName], props, null);
        }
        return h(UnknownElement, props, null);
    }

    render() {
        const {id, type} = this.props.data;
        return (
            <center>
                <div className='main-width'>
                    {this.props.isEditMode 
                    ? <EditApi data={this.props.data} render={(logicProps)=>(
                        <FadeableCard id={id} type={type} isEditMode={this.props.isEditMode}>
                            {this.typeToComponent(logicProps, 'edit')}
                        </FadeableCard>
                      )}/>
                    : <ViewApi data={this.props.data} handleReady={this.props.handleReady} render={(logicProps)=>(
                        <div>
                            {/* !this.props.isPreview && <UsageTracker data={this.props.data} /> */}
                            {this.typeToComponent(logicProps, 'view')}
                        </div>
                      )}/>
                    }
                </div>
            </center>
        );
    }
}

export default Element;