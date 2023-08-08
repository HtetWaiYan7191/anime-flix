import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import {BiCameraMovie} from 'react-icons/bi'

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const handleSubmit = () => {
    if(location.pathname === '/') {
      navigate(`/search/${search}`)
    }
  }
  
  return (
    <section className='navbar-section fixed  z-10 top-0 left-0 w-[100%] backdrop-blur-lg bg-white/90'>
      <div className='navbar-container  flex justify-between p-5 items-center shadow-md border-b'>
        <ul className='navbar-pages flex items-center'>
            <li className='pe-4'><a className='text-3xl text-red-500'>AnimeFlix</a></li>
            <li className='pe-4'><NavLink to="/" className= "pb-2 ">Popular Anime</NavLink></li>
            <li className='pe-4'><NavLink to="/airing" className= "pb-2 ">Airing</NavLink></li>
            <li className='pe-4'><NavLink to="/upcoming" className= "pb-2 ">Upcoming</NavLink></li>
        </ul>

        <ul className='navbar-search flex items-center'>
            <li className='pe-4'>
              <form action="" onSubmit={handleSubmit}>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}className='p-1 placeholder:p-1 outline-none border rounded-md border-black ps-1' placeholder='search' />
              </form>
              </li>
            <li className='pe-4'><BiCameraMovie className='text-4xl'/></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
