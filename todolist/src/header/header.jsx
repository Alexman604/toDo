import './header.css'

const Header = ({doneTasks}) => {
return (
    <div className='header'>
        <h1>to do-Do-do-Do-do</h1>
       
        <h2>finished tasks : {doneTasks} </h2>

    </div>

);
}

export default Header;