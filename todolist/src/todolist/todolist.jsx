import TodoItem from '../todoitem/todoitem'
import './todolist.css'

const TodoList = ({data, onDelete, onDone}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (<TodoItem {...itemProps} 
            key = {id} 
            onDelete = {() => onDelete(id)}
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