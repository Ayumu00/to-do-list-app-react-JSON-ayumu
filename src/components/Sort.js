function Sort ({ sortIt }) {
    return (
        <div className="Sort">
           <h2 className="All-Sort" onClick={() => {sortIt(false)}}>All</h2> 
           <h2 className="Important-Sort" onClick={() => {sortIt(true)}}>Important</h2>
        </div>
    )
}

export default Sort