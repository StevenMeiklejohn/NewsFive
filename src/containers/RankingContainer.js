import React, { Component } from 'react';


class RankingContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
  	tasks: [
        {id: "1", headline:"Article 1",type:"inProgress", backgroundColor: "red"},
        {id: "2", headline:"Article 2", type:"inProgress", backgroundColor:"green"},
        {id: "3", headline:"Article 3", type:"Done", backgroundColor:"blue"},
        {id: "4", headline:"Article 4", type:"Done", backgroundColor:"green"}
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

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.headline == headline) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        tasks
	    });
	}


	render() {
		var tasks = {
	      inProgress: [],
	      Done: []
	    }

		this.state.tasks.forEach ((task) => {
		  tasks[task.type].push(
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
          <h2 className="head">Starting with your least favourite, drag the articles to the right.</h2>
          <div className="inProgress"
            onDragOver={(event)=>this.onDragOver(event)}
            onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
            <span className="group-header">Unranked</span>
            {tasks.inProgress}
          </div>
          <div className="droppable"
            onDragOver={(event)=>this.onDragOver(event)}
            onDrop={(event)=>this.onDrop(event, "Done")}>
            <span className="group-header">Ranked</span>
            {tasks.Done}
          </div>
        </div>
	    );
  	}
}

export default RankingContainer;
