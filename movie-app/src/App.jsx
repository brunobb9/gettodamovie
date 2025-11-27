import { useState } from 'react'
import './App.css'
import './bodyContainer.css'
import './Header.css'
import './searchDiv.css'
import './Results.css'
import Header from './header'
import Search from './Search'
import Body from './Body'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Body/>
    </>
  )
}

export default App
