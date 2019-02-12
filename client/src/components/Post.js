import React, { Component } from 'react';
import Axios from 'axios';
import EditPost from './EditPost';
export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.post.title,
            contents: this.props.post.contents,
            id: this.props.post.id
        }
    }

    handleDelete = () => {
        this.deletePost(this.state.id)
    }

    deletePost = (id) => {
        Axios.delete(`http://localhost:4000/api/posts/${id}`)
        .then((res) => console.log(res))
        .catch(err => console.log(err.response));
        this.props.aRefresh();
    }

  render() {
    return (
      <div className="aPost">
        <h2>
            {this.state.title}
        </h2>
        <p>
            {this.state.contents}
        </p>
        <div className="editDelete">
        <EditPost post={this.props.post} 
                  editPost={this.props.editPost} />
        <button onClick={() => this.deletePost(this.props.post.id)} >DELETE</button></div>
      </div>
    )
  }
}
