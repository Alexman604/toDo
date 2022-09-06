import './todoitem.css'

const TodoItem = (props) => {
    const {task, date, done, onDelete, onEdit} = props;

 return(
    <li className='item'>
        
        <input type="checkbox" id="done" name="done"/>
        <span>{task}</span>
        <span>{date}</span>



    </li>

 )

}
export default TodoItem;