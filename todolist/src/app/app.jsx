import { Component } from "react";
import AddForm from "../addform/addform";
import Header from "../header/header";
import TodoItem from "../todoitem/todoitem";
import "./app.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // localStorage.clear()
    const dataFromLS = JSON.parse(localStorage.getItem("data"));
    if (dataFromLS === null) {
      localStorage.setItem("data", JSON.stringify(this.state.data));
    } else {
      this.setState(() => ({ data: dataFromLS }));
    }
  }

  onAddTask = (taskName, taskDescription) => {
    if (!taskName || !taskDescription) {
      return;
    } else {
      const newTask = {
        taskName,
        taskDescription,
        date: moment().format("lll"),
        done: false,
        id: moment().format(),
      };
      this.setState(({ data }) => {
        const newArr = [...data, newTask];
        return { data: newArr };
      });
    }
  };

  onChangeTask = (taskNameChanged, taskDescriptionChanged, id) => {
    if (!taskNameChanged || !taskDescriptionChanged) {
      return;
    } else {
      const updTask = {
        taskName: taskNameChanged,
        taskDescription: taskDescriptionChanged,
        date: moment().format("lll"),
        done: false,
        id,
      };
      this.setState(({ data }) => ({
        data: data.map((item) => {
          if (item.id === id) {
            item = Object.assign({}, updTask);
          }
          return item;
        }),
      }));
    }
  };

  onDeleteTask = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  render() {
    const { data } = this.state;
    const doneTasks = this.state.data.filter((item) => item.done).length;
    return (
      <div className="app">
        <Header doneTasks={doneTasks} />
        <AddForm onAddTask={this.onAddTask} />

        <ul className="todolist">
          {data.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                taskName={item.taskName}
                taskDescription={item.taskDescription}
                date={item.date}
                done={item.done}
                onDeleteTask={this.onDeleteTask}
                onToggleDone={this.onToggleDone}
                onChangeTask={this.onChangeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
