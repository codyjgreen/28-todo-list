import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: this.props.title,
        content: this.props.content,
        id: this.props.id
    }
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(ev) {
      let newState = {};
      newState[ev.target.value] = ev.target.value;
      this.setState(newState);

  }

  save(ev) {
    event.preventDefault();
    this.props.saveUpdate(this.save)
  }

  cancel(ev) {
    event.preventDefault();
    this.props.cancelUpdate();
  }


  render() {
    return <div>
      <p>Make a note or read a note.</p>
      <p>Get started by opening the Dashboard.</p>
    </div>
  }
}

export default Edit;