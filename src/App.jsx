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
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='/search/:id' element={SearchPage}></Route>
  </Routes>
);

export default App
