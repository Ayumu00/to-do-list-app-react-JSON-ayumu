import { Link } from 'react-router-dom'

function AddList ({ closeExistingNav }) {
    return (
        <div className="AddList">
            <Link to={'/Add'}><button className='add-btn' onClick={closeExistingNav}>+</button></Link>
        </div>
    )
}

export default AddList