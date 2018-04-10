import React, { Component } from 'react';

class Note extends Component{

    onHandleDelete = () => {
        this
            .props
            .onDelete(this.props.id);
    }

    render() {
        const {text, color} = this.props;
        return (
            <div className="note">
                <i className="glyphicon glyphicon-remove" onClick={this.onHandleDelete}></i>
                <p className={color}>{text}</p>
            </div>
        )
    }
}

export default Note;