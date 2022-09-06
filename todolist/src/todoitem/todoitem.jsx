import { Component } from 'react';
import './todoitem.css'

class TodoItem extends Component {
    constructor (props) {
        super(props)
      
    }

    render() {   
        const {task, date, done, onDeleteTask, onToggleDone, onEdit} = this.props; 
        let taskClassName = "normal"
    if (done) {
        taskClassName += ' crossed'
    };


 return(
    <li className='item'>
        <button onClick={onDeleteTask}>delete</button>
        <input type="checkbox" id="done" name="done" onChange={onToggleDone}/>
        <span className={taskClassName}>{task}</span>
        <span className={taskClassName}>{date}</span>



    </li>

 )}
    
 

}
export default TodoItem;