import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularAnime } from '../redux/popularSlice';
import PopularAnimeCard from '../components/popularAnimeCard';
import '../styles/Home.css'


const Home = () => {
  const dispatch = useDispatch();
  const popularAnime = useSelector((state) => state.popular.value)
  useEffect(() => {
    dispatch(fetchPopularAnime())
  },[])
  return (
    <section className='home-section pt-28'>
      <div className='ads-trailer-container'>

      </div>

      <div className = 'home-container'>
        {popularAnime.map((anime) => <PopularAnimeCard anime={anime} key={anime.mal_id}/>)}
      </div>
    </section>
  )
}

export default Home
