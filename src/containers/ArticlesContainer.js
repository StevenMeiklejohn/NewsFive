import React from 'react';

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentArticle: 0,
      formattedArticles: []
    }

    this.switchArticle = this.switchArticle.bind(this);
  }

  switchArticle(){
    if(this.state.currentArticle === 4){
      this.props.switchToRankingView();
    } else {
      this.setState((prevState) => ({currentArticle: prevState.currentArticle +1}))
    }
  }

  render() {
    console.log('current article', this.state.currentArticle);
    console.log('formattedArticles prop', this.props.articles);

    if (this.props.articles == null || this.props.articles.length === 0) {
  return <p>Loading...</p>;
  }

  return (
      <div id="article">
        {this.props.articles[this.state.currentArticle]}
        <button className ="nextArticleButton" onClick={this.switchArticle}>Next</button>
      </div>
    )
  }
}

export default ArticlesContainer;
