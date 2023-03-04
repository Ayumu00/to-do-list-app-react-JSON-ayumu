import { Link } from 'react-router-dom'

function AddListUI ({ onSubmit, onClick, ifAdded, onChange }) {
    return (
        <div className="AddListUI">
            <div className="top-add">
                <Link to='/'><button onClick={onClick}>X</button></Link>
                <h1>New To Do</h1>
            </div>
            <form onSubmit={onSubmit}>
                <input className='Todo' type="text" placeholder="What are you planning?" required onChange={onChange} maxLength='30'/>
                <label className='Date'>Date <input className='DateValue' type="date" required /></label>
                <label className='ImportantLabel'><input type="checkbox" className='ImportantValue' /> Important</label>
                {ifAdded ? <button>Added</button> : <button type="submit"><i className="fas fa-plus"></i>Add To Do</button>}
            </form>
        </div>
    )
}

export default AddListUI