import { Component } from 'react';
import './todoitem.css'

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            taskNameEdit: this.props.taskName,
            taskDescriptionEdit: this.props.taskDescription
        }
    }

    onEdit() {
        this.setState({edit: !this.state.edit});
    }
   
    onValueChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
     }
 
   onSubmitChange = (event) => {
    event.preventDefault();
    this.props.onChangeTask(this.state.taskNameEdit, this.state.taskDescriptionEdit, this.props.id)
    this.setState({edit: !this.state.edit});
   }
 
    render() {   
        const {taskName, taskDescription, date, done} = this.props; 
        const {taskNameEdit, taskDescriptionEdit} = this.state;
        let taskClassName = "normal"
    if (done) {
        taskClassName += ' crossed'
    };


 return(
    <li className='item'>
        
        <input type="checkbox" id="done" name="done" onChange={() => {
        this.props.onToggleDone(this.props.id)
    }}/>
        
        {this.state.edit ? 
        (
           <form onSubmit={this.onSubmitChange}>
            <input  
                name = "taskNameEdit"  
                type="text" 
                className="inputName" 
                onChange={this.onValueChange} 
                value={taskNameEdit} />
            <input  
                name = "taskDescriptionEdit"  
                type="text" 
                className="inputDescription" 
                onChange={this.onValueChange} 
                value={taskDescriptionEdit} />
            <button className='btn' type="submit"><i class="fa-solid fa-circle-check"></i></button>
            </form>
        ) : 
        (
            <form>
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskName}</span>  
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskDescription}</span>
        <span className={taskClassName}>{date}</span>
        <button className='btn' onClick = {()=>this.onEdit()}><i class="fa-solid fa-pen-to-square"></i></button>
        <button className='btn' onClick={() =>{
        this.props.onDeleteTask(this.props.id)
    }}><i class="fa-solid fa-trash-can"></i></button>
        </form>
        ) }

        



    </li>

 )}
    
 

}
export default TodoItem;