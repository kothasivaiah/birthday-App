import React,{useState} from 'react'
import Data from './Data'
import List from './List'
import './App.css'


const App = () => {
    const [people,setPeople] = useState(Data)

  return (
    <div>
  <section className="container">
    <h3>{people.length} birthdays today</h3>
    <List people = {people}/>
    <button onClick={()=> setPeople([])}>Clear All</button>
  </section>
    </div>
  )
}

export default App
