

import './App.css'
import { Route, Routes } from 'react-router'
import Root from './Root/Root'
import Home from './Home/Home'
import Contact from './Contact/Contact'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Root/>}>
        <Route index element= {<Home/>}/>
        <Route path= '/contact' element= {<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
