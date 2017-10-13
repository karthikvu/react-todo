import React from 'react';


class ToDo extends React.Component {
    render(){
    	var classes= 'todo';
    	if(this.props.status == 'completed'){
    		classes += ' completed'
    	}
        return (
            <div className={classes}>
             {this.props.status != 'completed'  &&  this.props.id + 1}  {this.props.status != 'completed'  && '-'} {this.props.name}  {this.props.status != 'completed'  && <span className="done" id={this.props.id} onClick={this.props.delete}>done</span>}
            </div>
        )
    }
}

export default ToDo
