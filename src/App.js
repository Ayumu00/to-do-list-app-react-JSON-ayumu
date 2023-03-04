import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sort from './components/Sort'
import Lists from './components/Lists'
import AddList from './components/AddList'
import Navigation from './components/Navigation'
import AddListUI from './components/AddListUI'
import RandomColor from 'randomcolor'
import About from './components/About'

function App() {
  const [buttonAdded, setButtonAdded] = useState(false)
  const [ifImportant, setIfImportant] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [lists, setLists] = useState([])
  
  useEffect(() => {
    const listsFunc = async () => {
      const data = await fetchFunc()
      setLists(data)
    }

    listsFunc()
  }, [])

  const fetchFunc = async () => {
    const res = await (await fetch('http://localhost:5000/list')).json()
    return res
  }

  const openNavigation = () => {
    openNav ? document.querySelector('.navigation-container').classList.remove('navigation-container-open') : document.querySelector('.navigation-container').classList.add('navigation-container-open')
    setOpenNav(!openNav)
  }

  const closeNavigation = () => {
    document.querySelector('.navigation-container').classList.remove('navigation-container-open')
    setOpenNav(false)
  }

  const sortFilter = async (conditionSort) => {
    const data = await fetchFunc()

    const important = data.filter((item) => {
      return item.important
    })

    const allLists = data.map((item) => {
      return item
    })
    
    if (conditionSort) {
      document.querySelector('.Important-Sort').style.cssText = 'box-shadow: 0 1px 0 0 black'
      document.querySelector('.All-Sort').style.cssText = 'box-shadow: 0 0px 0 0 black'
      setLists(important)
      setIfImportant(true)
    } else {
      document.querySelector('.Important-Sort').style.cssText = 'box-shadow: 0 0px 0 0 black'
      document.querySelector('.All-Sort').style.cssText = 'box-shadow: 0 1px 0 0 black'
      setLists(allLists)
      setIfImportant(false)
    }
  }

  const deleteTodos = async (e) => {
    const deletedItem = lists.filter((item) => {
      return item.id != e.target.getAttribute('data-id')
    })

    setLists(deletedItem)

    await fetch(`http://localhost:5000/list/${e.target.getAttribute('data-id')}`, {
      method: 'DELETE'
    })
  }

  const toggleImportant = async (e) => {
    const ifTrue = (await (await fetch(`http://localhost:5000/list/${e.target.getAttribute('data-id-toggle')}`)).json()).important

    const data = await fetch(`http://localhost:5000/list/${e.target.getAttribute('data-id-toggle')}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({important: !ifTrue})
    })

    ifImportant ? sortFilter(true) : sortFilter(false)
  }

  const formData = async (e) => {
    e.preventDefault()
    const todo = document.querySelector('.Todo').value
    const date = document.querySelector('.DateValue').value
    const important = document.querySelector('.ImportantValue').checked
    const randomNumber = Math.floor(Math.random() * 10000) + 1
    await fetch('http://localhost:5000/list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({id:randomNumber, subject:todo, date:date, color:RandomColor(), important:important})
    })

    document.querySelector('form').reset()
    setButtonAdded(true)
  }

  const validateInput = () => {
    const text = document.querySelector('.Todo').value
    if (text.length >= 30){
      let textArray = text.split('')
      textArray.pop()
      textArray = textArray.join('')
      const replaceText = document.querySelector('.Todo').value = textArray
    }

    setButtonAdded(false)
  }

  const updatedYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={
          <>
            <Navigation sortIt={sortFilter} closeExistingNav={closeNavigation}/>
            <Header onClickNav={openNavigation} ifTrue={openNav}/>
            <Sort sortIt={sortFilter}/>
            <Lists todos={lists} deleteTodo={deleteTodos} toggleImportantClick={toggleImportant}/>
            <AddList closeExistingNav={closeNavigation} />
          </>
        } />
        <Route path='/Add' element={<AddListUI onSubmit={formData} onClick={()=>{sortFilter(false);setButtonAdded(false)}} ifAdded={buttonAdded} onChange={validateInput}/>}/>
        <Route path='/About' element={<About year={updatedYear()} sortIt={sortFilter}/>} />
      </Routes>
    </div>
  )
}

export default App;
