import { Component } from 'react';
import './addform.css'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        } 
        
    }
    onValueChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
     }
 
     onSubmit = (event) => {
         event.preventDefault();
         this.props.onAddTask(this.state.task);
         this.setState({task:''})
     }
    render() {
            const {task} = this.state;
        return (
        <div className="addform">
        
            <form className="addform" onSubmit={this.onSubmit}>
                
                <button type="submit" className="btn btn-info">add</button>
                <input  name = "task"  type="text" className="input" onChange={this.onValueChange} value={task} placeholder="Add new task"/>
                              
            </form>
        </div>

        ) 
}
}
export default AddForm;