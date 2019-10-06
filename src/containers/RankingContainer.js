import React from 'react';
import { APIRequest } from './../api/fetch.js';
import RankArticles from './../components/rankArticles.js';
import RankArticlesResult from './../components/rankArticlesResult.js'



class RankingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionComplete: false
    }
    this.switchSelectionComplete = this.switchSelectionComplete.bind(this);
  }

  switchSelectionComplete(){
    this.setState({selectionComplete: true});
  }

  render() {

    if(!this.state.selectionComplete){
      return (
        <div>
        <RankArticles
        articles={this.props.articles} />
        <button className ="nextArticleButton" onClick={this.switchSelectionComplete}>Submit</button>
        </div>
      )
    }
    return (
      <RankArticlesResult />
    )
  }






}

export default RankingContainer;
