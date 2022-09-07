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
        
        
        
        {this.state.edit ? 
        (
           <form onSubmit={this.onSubmitChange}
            className = 'formWrapper'>
            <input  
                name = "taskNameEdit"  
                type="text" 
                className="inputNameEdit" 
                onChange={this.onValueChange} 
                value={taskNameEdit} />
            <textarea  
                name = "taskDescriptionEdit"  
                type="text" 
                className="inputDescriptionEdit" 
                onChange={this.onValueChange} 
                value={taskDescriptionEdit} />
            <button className='btn' type="submit"><i className="fa-solid fa-circle-check fa-lg"></i></button>
            </form>
        ) : 
        (
            <form className='formWrapper'>
            <input type="checkbox" id="done" name="done" onChange={() => {
                this.props.onToggleDone(this.props.id)
            }}/>
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskName}</span>  
            <span className={taskClassName} onClick = {()=>this.onEdit()}>{taskDescription}</span>
                 <div className='btnRight'>
            <span className={`date  ${taskClassName}`}>{date}</span>
                    
                 <button className='btn' onClick = {()=>this.onEdit()}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                <button className='btn' onClick={() =>{
        this.props.onDeleteTask(this.props.id)
    }}><i className="fa-solid fa-trash-can fa-lg"></i></button>

</div>
        </form>
        ) }

        



    </li>

 )}
    
 

}
export default TodoItem;