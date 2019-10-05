import React from 'react';
import { APIRequest } from './../api/fetch.js';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    // fetch("http://localhost:3001/api/")
    //
    // .then(res => res.json())
    APIRequest("articlesApi")
    .then((results) => {
      this.setState({ stories: JSON.parse(results) })
    })
  }




  render() {
    return (
      <div>
      <h1>Main Container</h1>
      </div>
    )
  }
}

export default MainContainer;
