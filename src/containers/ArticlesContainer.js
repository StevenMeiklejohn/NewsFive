import React from 'react';
import Article1 from './../components/Article1.js';




class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentArticle: 0,
      articleElements: [],

    }

    this.createArticleElements = this.createArticleElements.bind(this);

  }

  createArticleElements(){
    let allArticles = []
    let singleArticleElements = [];
    console.log('incoming articles data', this.props.articles.articles);
    for(let data of this.props.articles.articles){
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
    return allArticles;
  }






  render() {
    if (this.props.articles == null || this.props.articles.length === 0) {
  return <p>Loading...</p>;
  }
  let elements = this.createArticleElements();
  console.log(this.props.articles.articles[0].body[0].model.text);
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default ArticlesContainer;
