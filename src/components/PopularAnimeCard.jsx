import React from 'react'
import '../styles/animeCard.css'

const PopularAnimeCard = ({anime}) => {
  return (
    <div className='popular-anime-card'>
      <img src={anime.images.jpg.image_url} alt={anime.title} className='' />
    </div>
  )
}

export default PopularAnimeCard
