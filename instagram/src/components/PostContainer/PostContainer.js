import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.setState({
      comments: [],
      newComment: ""
    });
  }

  render() {
    console.log('Props: ', this.props.data);
    return(
      <div className="main">Yay, Post Conatiner</div>
    )
  }
}

export default PostContainer;