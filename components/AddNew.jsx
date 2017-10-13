import React from 'react'

class AddNew extends React.Component {
     constructor(props) {
        super(props)

        this.state = {
            value : ""
        }

        this.updateValue = this.updateValue.bind(this)
        this.submit = this.submit.bind(this)
     }
    updateValue(e){
        this.setState({
            value : e.target.value 
        })
    }

    submit(e){
        e.preventDefault();
        this.props.add(this.state.value)
         this.setState({
            value : ""
        })
    }
    
    render(){
        return (
        <form onSubmit={this.submit}>
          <input className="input" type="text" value={this.state.value} onChange={this.updateValue} placeholder="Add a task ! Press enter"></input>
        </form>
        )
    }
}

export default AddNew