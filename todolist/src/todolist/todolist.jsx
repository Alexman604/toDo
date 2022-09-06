import TodoItem from '../todoitem/todoitem'
import './todolist.css'

const TodoList = ({data, onDeleteTask, onToggleDone}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (<TodoItem {...itemProps} 
            key = {id} 
            onDeleteTask = {() => onDeleteTask(id)}
            onToggleDone = {()=>onToggleDone(id)}
          //  onEdit = {() => onEdit(id)}

            />)
    })
    
    return (
        <ul className="todolist">
            {elements}

        </ul>

    )
}
export default TodoList; 