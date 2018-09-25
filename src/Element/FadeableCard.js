import { h, Component } from 'preact';

import ToolbarQuill from './Text/ToolbarQuill';

const EDIT_CONTINUE_ELEMENT = 0; // TODO

const styling = {
    toolbar: {
        display: `flex`,
        position: `relative`,
        height: 0.9 + `rem`,
        zIndex: 2,
        justifyContent: 'center',
        cursor: 'default',
    },
    card: {},
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 0.2rem',
    }
}

class FadeableCard extends Component {
    state = {
        isOpen: true,
        shouldFade: true
    }

    toggle(prop) { //used for isEditmode...
        this.setState({[prop]: !this.state[prop]})
    }

    render() {
        let {type, id, isEditMode} = this.props;
        const extraClass = (type===EDIT_CONTINUE_ELEMENT) ? 'continue' : '';
        return (
            <div> {this.props.children} </div>
        );
        /*
        return (
            <div>
                <Fade timeout={300} in={this.state.shouldFade}>
                    <Card className={this.state.isOpen ? "card-fancy has-shadow "+extraClass : "card-fancy has-shadow minimized"}>
                        {type===globals.EDIT_CONTINUE_ELEMENT
                            ? null
                            : <section style={styling.cardActions} > 
                                {ToolbarQuill(id, type === globals.EDIT_QUILL && isEditMode)}
                                <div className='card-hint'>
                                    {this.state.isOpen ? null : typeToString(type) }
                                </div>
                                <div hidden={!isEditMode} >
                                    <a className="card-header-action btn btn-setting"
                                       onClick={() => this.props.onMoveElement(id, -1)}
                                    >
                                        {ICON("icon-arrow-up-circle")}
                                    </a>

                                    <a className="card-header-action btn btn-setting"
                                       onClick={() => this.props.onMoveElement(id, +1)}>
                                        {ICON("icon-arrow-down-circle")}
                                    </a>
                                    <a
                                        className="card-header-action btn btn-setting"
                                        data-target="#collapseExample"
                                        onClick={() => this.toggle('isOpen')}>
                                        {ICON("icon-minus")}
                                    </a>
                                    <a
                                        className="card-header-action btn btn-setting"
                                        onClick={() => {
                                            this.toggle('shouldFade')
                                            this.props.onDeleteElement(id) //id is alrea
                                        }}>
                                        {ICON("icon-close")}
                                    </a>
                                </div>
                            </section>
                        }
                        <Collapse isOpen={this.state.isOpen} id="collapseExample">
                            <CardBody>
                                {this.props.children}

                            </CardBody>
                        </Collapse>
                    </Card>

                </Fade>
            </div>

        );
        */
    }
}

export default FadeableCard;