import { Component } from "react";
import AddForm from "../addform/addform";
import Header from "../header/header";
import TodoList from "../todolist/todolist";
import "./app.css"

class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            data: [
                {taskName: 'clean', taskDescription: 'car', date: '17.02.22', done: false, id:1},
                {taskName: 'read', taskDescription: 'book', date: '18.02.22', done: false, id:2},
                {taskName: 'finish', taskDescription: 'work', date: '18.02.22', done: false, id:3},
            ],
        }
        this.maxId = 4;
    }

    onAddTask = (taskName, taskDescription) => {
        const newTask = {
            taskName,
            taskDescription,
            date:new Date().toLocaleString("en-US"),
            done: false,
            id: this.maxId++
        }
     this.setState(({data}) => {
        const newArr = [...data, newTask]
        return {data: newArr};
     } );  
    }

    onChangeTask = (taskNameChanged, taskDescriptionChanged, id) =>{
        console.log("taskNameChanged",taskNameChanged);
    }

    deleteTask = (id) => {
        this.setState(({data}) =>{
            return { data: data.filter(item => item.id !== id)}
        })
    }

    onToggleDone = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {return {...item, done: !item.done}}
                return item;
            })

        }))
    }


render(){
    const {data} = this.state;
    const doneTasks = this.state.data.filter(item => item.done).length;
    return(
        <div className="app">
            <Header doneTasks = {doneTasks}/>
            <AddForm onAddTask = {this.onAddTask}/>
            <TodoList data = {data} 
                onDeleteTask = {this.deleteTask} 
                onToggleDone = {this.onToggleDone}
                onChangeTask = {this.onChangeTask}/>
           

        </div>

    );
}



}

export default App;