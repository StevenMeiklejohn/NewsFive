import React, { Component } from 'react';


class RankingContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
  	options: []
  }
  this.onDragStart = this.onDragStart.bind(this);
  this.onDragOver = this.onDragOver.bind(this);
  this.onDrop = this.onDrop.bind(this);
  this.generateOptions = this.generateOptions.bind(this);
  }

  componentDidMount(){
    this.generateOptions();
  }

  generateOptions(){
    const generatedOptions = this.props.headlines.map((headline, index) => {
      return {id: index + 1, headline: (index + 1) + ": " + headline, type:"inProgress"};
    })
    this.setState({options: generatedOptions});
  }

  onDragStart(event, headline){
    	console.log('dragstart on div: ', headline);
    	event.dataTransfer.setData("headline", headline);

	}

	onDragOver(event){
	    event.preventDefault();
	}

	onDrop(event, cat){
	    let headline = event.dataTransfer.getData("headline");

	    let options = this.state.options.filter((task) => {
	        if (task.headline == headline) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        options
	    });
	}


	render() {
		var options = {
	      inProgress: [],
	      Done: []
	    }

		this.state.options.forEach ((task) => {
		  options[task.type].push(
		    <div key={task.id}
		      onDragStart = {(event) => this.onDragStart(event, task.headline)}
		      draggable
		      className="draggable"
		      style = {{backgroundColor: task.bgcolor}}>
		      {task.headline}
		    </div>
		  );
		});

	    return (
        <div className="drag-container">
          <h2 className="head">Starting with your favourite, please drag</h2>
          <h2 className="head">the articles to the right in order of preference.</h2>
          <div className="inProgress"
            onDragOver={(event)=>this.onDragOver(event)}
            onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
            <span className="group-header">Unranked</span>
            {options.inProgress}
          </div>
          <div className="droppable"
            onDragOver={(event)=>this.onDragOver(event)}
            onDrop={(event)=>this.onDrop(event, "Done")}>
            <span className="group-header">Ranked</span>
            {options.Done}
          </div>
        </div>
	    );
  	}
}

export default RankingContainer;
