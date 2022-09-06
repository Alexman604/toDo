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
    }


render(){
    const {data} = this.state;
    return(
        <div className="app">
            <Header/>
            <AddForm/>
            <TodoList data = {data}/>
           

        </div>

    );
}



}

export default App;