import React, { Component } from 'react';
import Axios from "axios";
import PostMap from './PostMap';

export default class PostList extends Component {
    constructor(){
        super();
        this.state = {
          initialized: false,
          posts: [],
        }
    }

    componentDidMount(){
      Axios
      .get(
          'http://localhost:4000/api/posts'
      )
      .then(res => {
        this.setState({
          posts: res.data
        })
      } )
      .catch(err => console.log('error fetching'))
    }

  render() {
    return (
      <div>
        <PostMap posts={this.state.posts} />
      </div>
    )
  }
}
