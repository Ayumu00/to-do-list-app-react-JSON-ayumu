import { Link } from 'react-router-dom'

function About ({ year, sortIt }) {
    return (
        <div className='About'>
            <Link to='/'><i onClick={() => {sortIt(false)}} className="fas fa-angle-left"></i></Link>
            <h1>This app was made by Ayumu. App is based on React JS</h1>
            <h2>COPYRIGHT © {year} AYUMU</h2>
        </div>
    )
}

export default About