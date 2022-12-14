import { Component } from "react";
import "./addform.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: "",
    };
  }
  onValueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state.taskName, this.state.taskDescription);
    this.setState({ taskName: "", taskDescription: "" });
  };
  render() {
    const { taskName, taskDescription } = this.state;
    return (
      <div className="addform">
        <form className="addform" onSubmit={this.onSubmit}>
          <div className="inputWrapper">
            <input
              name="taskName"
              type="text"
              className="inputName"
              onChange={this.onValueChange}
              value={taskName}
              placeholder="Name your task"
            />
            <textarea
              name="taskDescription"
              type="text"
              className="inputDescription"
              onChange={this.onValueChange}
              value={taskDescription}
              placeholder="Enter description"
            />
          </div>

          <button type="submit" className="btn">
            <i className="fa-solid fa-floppy-disk fa-lg"></i>
          </button>
        </form>
      </div>
    );
  }
}
export default AddForm;
