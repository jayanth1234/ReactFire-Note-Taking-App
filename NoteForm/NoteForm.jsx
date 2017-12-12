import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    //When the userInput changes, set the newNoteContent to the value of that whats in the input box.
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,   //value of text input
        })
    }
    
    writeNote(){
        //Call a method that sets the noteContentfor a note to the value of the input
        this.props.addNote(this.state.newNoteContent);
        
        //Set newNoteContent back to an empty string
        this.setState({
            newNoteContent: '',
        })
    }
    
    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" placeholder="Write a new note..."
                        value = { this.state.newNoteContent }
                        onChange = { this.handleUserInput }/>
                <button className="noteButton"
                        onClick= { this.writeNote }>
                        Add Note</button>
            </div>
        )
    }
    
}

export default NoteForm;