import React, { Component } from 'react';


class RankingContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
  	options: [
        {id: "1", headline:"1: " + this.props.headlines[0],type:"inProgress"},
        {id: "2", headline:"2: " + this.props.headlines[1], type:"inProgress"},
        {id: "3", headline:"3: " + this.props.headlines[2], type:"inProgress"},
        {id: "4", headline:"4: " + this.props.headlines[3], type:"inProgress"},
        {id: "5", headline:"5: " + this.props.headlines[4], type:"inProgress"}
  	]
  }
  this.onDragStart = this.onDragStart.bind(this);
  this.onDragOver = this.onDragOver.bind(this);
  this.onDrop = this.onDrop.bind(this);
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
