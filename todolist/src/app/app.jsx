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
                {task: 'clean', date: '17.02.22', done: false, id:1},
                {task: 'read', date: '18.02.22', done: false, id:2},
                {task: 'finish', date: '18.02.22', done: false, id:3},
            ],
        }
        this.maxId = 4;
    }

    onAddTask = (task) => {
        const newTask = {
            task,
            date:new Date().toLocaleString("en-US"),
            done: false,
            id: this.maxId++
        }
     this.setState(({data}) => {
        const newArr = [...data, newTask]
        return {data: newArr};
     } );  
    }


render(){
    const {data} = this.state;
    return(
        <div className="app">
            <Header/>
            <AddForm onAddTask = {this.onAddTask}/>
            <TodoList data = {data}/>
           

        </div>

    );
}



}

export default App;