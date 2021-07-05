import React from 'react';
import Post from './Post';

export default function PostMap(props) {
  return (
    <div>
      {props.posts.map(post => (
          <Post post={post} 
                key={Number(post.id+Date.now())} 
                aRefresh={props.aRefresh}
                editPost={props.editPost} />
      ))}
    </div>
  )
}
