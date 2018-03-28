import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div>
        <h1 className="App">Insta-Clone-React!</h1>
        <PostContainer data={this.state.dummyData} />
        </div>
      );
    }
  }
  
export default App;
