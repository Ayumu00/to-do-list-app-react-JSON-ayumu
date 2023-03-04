import ProfilePicture from '../images/profile.png'

function Header ({ onClickNav, ifTrue }) {
    return (
        <div>
            <header>
                <nav>
                    <i onClick={onClickNav} className={`${ifTrue ? "fas fa-times" : "fas fa-bars"}`}></i>
                </nav>
                <div className="profile">
                     <img src={ProfilePicture} alt="profile" />
                </div>
            </header>
            <h1 className='header-h1'>To Do List</h1>
        </div>
    )
}

export default Header