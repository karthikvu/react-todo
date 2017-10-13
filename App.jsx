import React from 'react';
import axios from 'axios';


import ToDo from './components/ToDo.jsx'
import AddNew from './components/AddNew.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            default: "",
            tasks: [],
            done: []
        }
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)

    }
    componentDidMount() {
        var app = this;
        axios.get("https://59d74eb2375f8b0012ab68de.mockapi.io/todo/").then(function(resp) {
            var tasks = resp.data;
            app.setState({
                tasks: tasks
            })
        })
    }
    delete(e) {
        var index = e.target.id;
        var done = this.state.tasks[index]
        this.state.done.push(done)
        this.state.tasks.splice(index, 1)
        axios.delete("https://59d74eb2375f8b0012ab68de.mockapi.io/todo/" + done.id).then(function(resp) {
            console.log("resp", resp.data);
        })
        this.setState({
            tasks: this.state.tasks
        })
    }



    add(data) {
        if (data == null || data == '') {
            return;
        }

        var todo = {
            id: Date.now(),
            taskName: data
        }
        var app = this;
        axios.post("https://59d74eb2375f8b0012ab68de.mockapi.io/todo/", todo).then(function(resp) {
            app.state.tasks.push(resp.data)
            app.setState({
                tasks: app.state.tasks
            })
        })
    }
    
    render() {            
        var toDos = []
       for(var i = 0 ; i < this.state.tasks.length ; i ++){
           var task = this.state.tasks[i];
           toDos.push(<ToDo key={task.id} name={task.taskName} id={i}  delete={this.delete} />)
       }
        
        var done =[]
        for(var i = 0 ; i < this.state.done.length ; i ++){
           var task = this.state.done[i];
           var id = "done_" + i ;
           toDos.push(<ToDo key={task.id} name={task.taskName}   status='completed' delete={this.delete} />)
       }
       
         var doneHeader ;
        if(done.length > 0){
            doneHeader = true;
        }
      return (
        <div className="todo-app">  
            <AddNew add={this.add}   /> 
            <hr></hr>
            {toDos}
            {doneHeader && <div>
                    <hr></hr>DONE<hr></hr>
                </div>}
              <ul>
               {done}
              </ul>
        </div>
);
   }
}




export default App; 