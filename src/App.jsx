import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Details from './pages/Details'
import Airing from './pages/Airing'
import Upcoming from './pages/Upcoming'

const App = () => (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/airing' element={<Airing/>}/>
    <Route path='/upcoming' element={<Upcoming/>}/>
    <Route path='/search:name' element={<SearchPage/>}></Route>
    <Route path='details:id' element={<Details/>}></Route>
  </Routes>
);

export default App
