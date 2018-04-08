const NOTES = [
    {
        id: 1,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },{
        id: 2,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },{
        id: 3,
        color: 'yellow',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }
];

const DEFAUL_COLOR_NOTE = 'yellow';

const Note = React.createClass({

    onHandleDelete(){
        this.props.onDelete(this.props.id);
    },

    render(){
        const { text, color } = this.props;
        return(
            <div className="note">
                <i 
                    className="glyphicon glyphicon-remove"
                    onClick={ this.onHandleDelete }
                >
                </i>
                <p className={ color }>{ text }</p>
            </div>
        )
    }
});

const NoteEditor = React.createClass({

    getInitialState(){
        return {
            text: ''
        }
    },

    handleTextChange(e){
        this.setState({
            text: e.target.value
        })
    },

    handleNoteAdd(){
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: DEFAUL_COLOR_NOTE
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    },

    resetState(){
        this.setState({
            text: ''
        });
    },

    render(){
        return(
            <div className="editor">
                <textarea
                    rows={ 5 }
                    placeholder="Enter yore message"
                    className="editor__textarea form-control"
                    value={ this.state.text }
                    onChange={ this.handleTextChange }
                />
                <button 
                    className="editor__button btn btn-success pull-right"
                    onClick={ this.handleNoteAdd }
                    disabled={ !this.state.text }
                    >
                    Add
                </button>
                <hr />
            </div>
        )
    }
});

const NotesGrid = React.createClass({
    componentDidMount(){
        this.msnry = new Masonry(this.grid, {
            columnWidth: 240,
            isFitWidth: true
          });          
    },

    componentDidUpdate(prevProps){
        if(prevProps.notes !== this.props.notes){
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render(){
        const { notes, onNoteDelete } = this.props;
        return(
            <div className="grid" ref={ c => this.grid = c } >
                {
                    notes.map(
                        note => 
                        <Note 
                        key={ note.id }
                        id={ note.id }
                        text={ note.text } 
                        color={ note.color }
                        onDelete={ onNoteDelete }
                        />)
                }
            </div>
        )
    }
});

const NotesApp = React.createClass({
    getInitialState(){
        return{
            notes: []
        }
    },

    componentDidMount(){
        const saveNotes = JSON.parse(localStorage.getItem('notes'));

        if(saveNotes){
            this.setState({
                notes: saveNotes
            });
        }
    },

    componentDidUpdate(prevProps, prevState){
        if(prevState.notes !== this.state.notes){
            this.saveToLoacalStorage();
        }
    },

    handleNoteAdd(newNote){
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    },

    handleNoteDelete(id){
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    },

    saveToLoacalStorage(){
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    },

    render(){
        return(
            <div className="app">
                <h2 className="app__header">Notes App</h2>
                <NoteEditor onNoteAdd={ this.handleNoteAdd }/>
                <NotesGrid
                    notes={ this.state.notes } 
                    onNoteDelete={ this.handleNoteDelete } 
                />
            </div>
        )
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);