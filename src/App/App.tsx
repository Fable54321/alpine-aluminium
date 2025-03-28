import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Root from './Root/Root'
import Home from './Home/Home'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Root/>}>
        <Route index element= {<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
