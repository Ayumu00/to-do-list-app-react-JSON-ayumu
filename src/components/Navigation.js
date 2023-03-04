import { Link } from 'react-router-dom'

function Navigation ({ sortIt, closeExistingNav}) {
    return (
        <div className="navigation-container">
            <nav>
                <i className="fas fa-times"></i>
            </nav>
            <ul>
                <Link style={{ textDecoration: 'none', color: 'black'}} to='/Add'><li onClick={closeExistingNav}>Add Todo</li></Link>
                <li onClick={()=>{ sortIt(false) }}>All Todos</li>
                <li onClick={()=>{ sortIt(true) }}>Important Todos</li>
            </ul>
            <Link to='/About' style={{ textDecoration: 'none', color: 'black'}}><footer onClick={closeExistingNav}>About</footer></Link>
        </div>
    )
}

export default Navigation