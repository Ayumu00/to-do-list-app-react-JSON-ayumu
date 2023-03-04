function Lists ({ todos, deleteTodo, toggleImportantClick }) {
    return (
        <div className="Lists">
            {todos.length > 0 ? todos.map((item, index) => {
                return <div key={item.id} data-id={item.id} className='item'>
                    <div key={index} data-id-toggle={item.id} onClick={toggleImportantClick} className="Cover-Important"></div>
                    <div key={item.id} className={`${item.important ? 'important-line' : ''}`} style={{ backgroundColor:item.color }}></div>
                    <i style={{color:item.color}}className="fas fa-clipboard-list"><button data-id={item.id} onClick={deleteTodo}>Remove</button></i>
                    <h6>{item.date}</h6>
                    <h3>{item.subject}</h3>
                </div>
            }) : <h1>Empty...</h1>}
        </div>
    )
}

export default Lists