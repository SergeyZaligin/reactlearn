import React from 'react';
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';
import Masonry from 'masonry-layout';
import Note from './Note';

const NotesGrid = createClass({
    componentDidMount() {
        this.msnry = new Masonry(this.grid, {
            columnWidth: 240,
            isFitWidth: true
        });
    },

    componentDidUpdate(prevProps) {
        if (prevProps.notes !== this.props.notes) {
            this
                .msnry
                .reloadItems();
            this
                .msnry
                .layout();
        }
    },

    render() {
        const {notes, onNoteDelete} = this.props;
        return (
            <div className="grid" ref={c => this.grid = c}>
                {notes.map(note => <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    color={note.color}
                    onDelete={onNoteDelete}/>)
}
            </div>
        )
    }
});

export default NotesGrid;