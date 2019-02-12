import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTitle: '',
      curContent: '',
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let postHold = {
      title: this.state.curTitle,
      contents: this.state.curContent,
    }
    this.props.addPost(postHold);
    this.setState({
      curTitle: '',
      curContent: '',
      modal: false
    })
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="addFriendDiv">
        <Button color="primary" onClick={this.toggle}>Add Post</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="Title" name="curTitle" value={this.state.curTitle} />
            <Input required onChange={this.handleChange} type="textarea" placeholder="Content" name="curContent" value={this.state.curContent} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}