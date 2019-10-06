import React from 'react';
import { APIRequest } from './../api/fetch.js';
import ArticlesContainer from './ArticlesContainer.js';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    APIRequest("articlesApi")
    .then((results) => {
      this.setState({ stories: results })
    })
  }




  render() {
    return (
      <div>
      <ArticlesContainer
        articles={this.state.stories}
        />
      </div>
    )
  }
}

export default MainContainer;
