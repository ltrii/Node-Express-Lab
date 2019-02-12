import React, { Component } from 'react';
import PostList from './components/PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Posts</h1>
            <PostList />
      </div>
    );
  }
}

export default App;
