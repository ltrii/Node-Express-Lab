import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.post.title,
            contents: this.props.post.contents
        }
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
      </div>
    )
  }
}
