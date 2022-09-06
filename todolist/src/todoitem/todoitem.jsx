import { Component } from 'react';
import './todoitem.css'

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            taskNameEdit: '',
            taskDescriptionEdit: ''
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
    this.props.onChangeTask(this.state.taskNameEdit, this.state.taskDescriptionEdit)
    
    console.log(this.state.taskNameEdit, this.state.taskDescriptionEdit);
    this.setState({edit: !this.state.edit});

   }
 
    render() {   
        const {taskName, taskDescription, date, done, onDeleteTask, onToggleDone} = this.props; 
      //  const {taskNameEdit, taskDescriptionEdit} = this.state;
        let taskClassName = "normal"
    if (done) {
        taskClassName += ' crossed'
    };


 return(
    <li className='item'>
        <button onClick={onDeleteTask}>delete</button>
        <input type="checkbox" id="done" name="done" onChange={onToggleDone}/>
        
        {this.state.edit ? 
        (
           <form onSubmit={this.onSubmitChange}>
            <input  
                name = "taskNameEdit"  
                type="text" 
                className="input" 
                onChange={this.onValueChange} 
                value={this.state.taskNameEdit} />
            <input  
                name = "taskDescriptionEdit"  
                type="text" 
                className="input" 
                onChange={this.onValueChange} 
                value={this.state.taskDescriptionEdit} />
            <button type="submit">edit</button>
            </form>
        ) : 
        (
            <>
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskName}</span>  
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskDescription}</span>
        <span className={taskClassName}>{date}</span>
        </>
        ) }

        



    </li>

 )}
    
 

}
export default TodoItem;