import TodoItem from '../todoitem/todoitem'
import './todolist.css'

const TodoList = ({data, onDeleteTask, onToggleDone, onChangeTask}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (<TodoItem {...itemProps} 
            key = {id} 
            onDeleteTask = {() => onDeleteTask(id)}
            onToggleDone = {() => onToggleDone(id)}
            onChangeTask = {() => onChangeTask(id)}
            />)
    })
    
    return (
        <ul className="todolist">
            {elements}

        </ul>

    )
}
export default TodoList; 