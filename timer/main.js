const NOTES = [
    {
        id: 1,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }
]

const Note = React.createClass({

    render(){
        return(
            <div>
                Note!!!
            </div>
        )
    }
});

const NoteEditor = React.createClass({

    render(){
        return(
            <div>
                NoteEditor!!!
            </div>
        )
    }
});

const NotesGrid = React.createClass({

    render(){
        return(
            <div>
                NoteGrid!!!
            </div>
        )
    }
});

const NotesApp = React.createClass({

    render(){
        return(
            <div>
                <NoteEditor />
                <NotesGrid />
            </div>
        )
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);