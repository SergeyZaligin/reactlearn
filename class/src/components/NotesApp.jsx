import React from 'react';
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

const NOTES = [
    {
        id: 1,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ' +
                'eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ' +
                'montes, nascetur ridiculus mus.'
    }, {
        id: 2,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ' +
                'eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ' +
                'montes, nascetur ridiculus mus.'
    }, {
        id: 3,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ' +
                'eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ' +
                'montes, nascetur ridiculus mus.'
    }
];

const NotesApp = createClass({
    getInitialState() {
        return {notes: []}
    },

    componentDidMount() {
        const saveNotes = JSON.parse(localStorage.getItem('notes'));

        if (saveNotes) {
            this.setState({notes: saveNotes});
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if (prevState.notes !== this.state.notes) {
            this.saveToLoacalStorage();
        }
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [
                newNote, ...this.state.notes
            ]
        });
    },

    handleNoteDelete(id) {
        this.setState({
            notes: this
                .state
                .notes
                .filter(note => note.id !== id)
        });
    },

    saveToLoacalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    },

    render() {
        return (
            <div className="app">
                <h2 className="app__header">Notes App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        )
    }
});

export default NotesApp;