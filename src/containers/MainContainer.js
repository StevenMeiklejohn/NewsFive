import React from 'react';
import { APIRequest } from './../api/fetch.js';
import ArticlesContainer from './ArticlesContainer.js';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recievedData: [],
      formattedArticles: []
    }
    this.formatArticleData = this.formatArticleData.bind(this);
    this.fetchData();
  }

  fetchData(){
    APIRequest("articlesApi")
    .then((results) => {
      this.setState({ recievedData: results }, this.formatArticleData)
    })
  }

  formatArticleData(){
    let allArticles = []
    let singleArticleElements = [];
    console.log('incoming articles data', this.state.recievedData.articles);
    for(let data of this.state.recievedData.articles){
      console.log('data', data);
      for(let element of data.body){
        console.log('element', element);
      if(element.type === "heading"){
        singleArticleElements.push(<h1>Heading: {element.model.text}</h1>);
      } else if (element.type === "paragraph") {
        singleArticleElements.push(<p> Paragraph: {element.model.text}</p>)
      } else if (element.type === "image") {
        console.log('image insert triggered');
        singleArticleElements.push(<img id="articleImage" src={element.model.url}></img>)
      }
      console.log('singleArticleElements', singleArticleElements);
    }
      console.log('singleArticleElements post loop', singleArticleElements);
      allArticles.push(singleArticleElements);
      singleArticleElements = [];
    }
    console.log('allArticles', allArticles);
    this.setState({formattedArticles: allArticles});
  }




  render() {
    return (
      <div>
      <ArticlesContainer
        articles={this.state.formattedArticles}
        />
      </div>
    )
  }
}

export default MainContainer;
