import { Component } from 'react';
import './addform.css'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription:'',

        } 
        
    }
    onValueChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
     }
 
     onSubmit = (event) => {
         event.preventDefault();
         this.props.onAddTask(this.state.taskName, this.state.taskDescription);
         this.setState({taskName:'', taskDescription:''})
     }
    render() {
            const {taskName, taskDescription} = this.state;
        return (
        <div className="addform">
        
            <form className="addform" onSubmit={this.onSubmit}>

                <button type="submit" className="btn btn-info">add</button>
                <input  name = "taskName"  type="text" className="input" onChange={this.onValueChange} value={taskName} placeholder="Task Name"/>
                <input  name = "taskDescription"  type="text" className="input" onChange={this.onValueChange} value={taskDescription} placeholder="Task Description"/>
                              
            </form>
        </div>

        ) 
}
}
export default AddForm;