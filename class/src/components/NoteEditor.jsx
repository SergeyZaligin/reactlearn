import React, { Component } from 'react';
// import createClass from 'create-react-class';
// import ReactDOM from 'react-dom';

const DEFAUL_COLOR_NOTE = 'yellow';

class NoteEditor extends Component{

    state = {
        text: ''
    }

    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleNoteAdd = () => {
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: DEFAUL_COLOR_NOTE
        };

        this
            .props
            .onNoteAdd(newNote);

        this.resetState();
    }

    resetState = () => {
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter yore message"
                    className="editor__textarea form-control"
                    value={this.state.text}
                    onChange={this.handleTextChange}/>
                <button
                    className="editor__button btn btn-success pull-right"
                    onClick={this.handleNoteAdd}
                    disabled={!this.state.text}>
                    Add
                </button>
                <hr/>
            </div>
        )
    }
}


export default NoteEditor;