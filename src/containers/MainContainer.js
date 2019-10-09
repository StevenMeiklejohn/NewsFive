import React from 'react';
import { APIRequest } from './../api/fetch.js';
import ArticlesContainer from './ArticlesContainer.js';
import RankingContainer from './RankingContainer.js';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recievedData: [],
      formattedArticles: [],
      articleHeadlines: [],
      rankingView: false
    }
    this.formatArticleData = this.formatArticleData.bind(this);
    this.switchToRankingView = this.switchToRankingView.bind(this);
    this.fetchData();
  }

  fetchData(){
    APIRequest("articlesApi")
    .then((results) => {
      this.setState({ recievedData: results }, this.formatArticleData)
    })
  }

  formatArticleData(){
    let allArticles = [];
    let singleArticleElements = [];
    let headlines = []
    for(let data of this.state.recievedData.articles){
      for(let element of data.body){
      if(element.type === "heading"){
        singleArticleElements.push(<h1 id="heading">{element.model.text}</h1>);
        headlines.push(element.model.text);
      } else if (element.type === "paragraph") {
        singleArticleElements.push(<p id="paragraph">{element.model.text}</p>)
      } else if (element.type === "image") {
        singleArticleElements.push(<img id="articleImage" src={element.model.url} alt={"http://web.yonsei.ac.kr/achung/maintenance.jpg"}></img>)
      }
    }
      allArticles.push(singleArticleElements);
      singleArticleElements = [];
    }
    this.setState({formattedArticles: allArticles});
    this.setState({articleHeadlines: headlines});
  }

  switchToRankingView(){
      this.setState({rankingView: true});
  }




  render() {
   if(this.state.rankingView){
      return (
        <RankingContainer
        headlines={this.state.articleHeadlines}
        articles={this.state.recievedData.articles}/>
      )
    }
    return (
      <div>
      <ArticlesContainer
      articles={this.state.formattedArticles}
      switchToRankingView={this.switchToRankingView}
      />
      </div>
    )
  }
}

export default MainContainer;
