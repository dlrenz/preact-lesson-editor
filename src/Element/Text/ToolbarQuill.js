import { h } from 'preact';

import textBiggerIcon from './assets/quillTextBigIcon.png';
import textSmallerIcon from './assets/quillTextSmallIcon.png';

const ToolBarQuill = (id) => {
    return (
        <div id={'toolbar-quill-' + id}>
         <span className="ql-formats">
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-link"></button>
        </span>
            <span className="ql-formats">
          <button className="ql-header ql-smaller">
            <img src={textSmallerIcon} height='20' alt=""/>
          </button>
          <button className="ql-header ql-bigger" value="1">
            <img src={textBiggerIcon} height='20' alt=""/>
          </button>
        </span>
            <span className="ql-formats">
          <button className="ql-blockquote"></button>
          <select className="ql-background">
            <option value="#cccccc"/>
            <option value="#f06666"/>
            <option value="#ffc266"/>
            <option value="#ffff66"/>
            <option value="#66b966"/>
            <option value="#66a3e0"/>
            <option value="#c285ff"/>
            <option value="#ffffff"/>
            <option value="#facccc"/>
            <option value="#ffebcc"/>
            <option value="#ffffcc"/>
            <option value="#cce8cc"/>
            <option value="#cce0f5"/>
            <option value="#ebd6ff"/>
          </select>
        </span>
        </div>
    )
}

export default ToolBarQuill;