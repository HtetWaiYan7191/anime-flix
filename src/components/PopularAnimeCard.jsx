import React from 'react'
import '../styles/animeCard.css'
import { Link } from 'react-router-dom'

const PopularAnimeCard = ({anime}) => {
  return (
    <Link to = {`/details/${anime.mal_id}`}>
    <div className='popular-anime-card'>
      <img src={anime.images.jpg.image_url} alt={anime.title} className='' />
    </div>
    </Link>
  )
}

export default PopularAnimeCard
