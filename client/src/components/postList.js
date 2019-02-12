import React, { Component } from 'react';
import Axios from "axios";
import PostMap from './PostMap';
import AddPost from './AddPost';

export default class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
          initialized: false,
          posts: []
        }
    }

    componentDidMount() {
      if(!this.state.initialized){
      this.getPosts();
      console.log("posts mount")
      }
      this.setState({
        initialized: true
      })
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getPosts();
    } else {
      console.log('empty update')
    }
  }

    aRefresh = () => {
      this.getPosts();
    }


    getPosts = () => {
      Axios
      .get(
          'http://localhost:4000/api/posts'
      )
      .then(res => {
        this.setState({
          posts: res.data
        })
      } )
      .catch(err => console.log('error fetching'));
      console.log('Posts fetched')
    }

    addPost = (newPost) => {
      Axios
        .post(`http://localhost:4000/api/posts/`, newPost)
        .then(res => console.log(newPost))
        .catch(err => console.log(err));
    }

    editPost = (cPost, id) => {
      Axios
          .put(`http://localhost:4000/api/posts/${id}`, cPost)
          .then(res => console.log(cPost))
          .catch(err => {
              console.log(err);
          })
    }

  render() {
    console.log(this.state.posts)
    return (
      <div>
        <AddPost addPost={this.addPost} />
        <PostMap posts={this.state.posts} 
                 aRefresh={this.aRefresh}
                 editPost={this.editPost} />
      </div>
    )
  }
}
