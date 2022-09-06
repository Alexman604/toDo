import { Component } from 'react';
import './addform.css'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: ''
        } 
        
    }
    


    render() {
        
    
        return (
        <div className="addform">
        
            <form 
            className="addform-flex">
                <button type="submit" className="btn">Add</button>
                <input name = "task"  type="text" className="input" placeholder="Add new task"/>
                              
            </form>
        </div>

        ) 
}
}
export default AddForm;