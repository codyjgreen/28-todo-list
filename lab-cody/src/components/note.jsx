import React from 'react';

class Note extends React.Component{
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(event) {
    event.preventDefault();
    console.log('deleting a note', this.props.id);
    this.props.deleteNote(this.props.id);
  }

  render() {
    return <li>
      {this.props.title}: {this.props.content}. <a onClick={this.deleteNote}>x</a>
    </li>
  }
}

export default Note;