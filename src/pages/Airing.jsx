import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiringAnime } from "../redux/airingSlice";
import '../styles/Airing.css'
import { Link } from "react-router-dom";

const Airing = () => {
  const airingAnime = useSelector((state) => state.airing.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAiringAnime())
  })

  return (
    <section className='airing-section pt-28'>
  <div className='airing-container grid grid-cols-6 gap-5 p-[20px]'>
    {airingAnime.map((anime) => {
      return (
        <Link to={`/details/${anime.mal_id}`} key={anime.id}>
        <div className='airing-card' >
          <img src={anime.images.jpg.image_url} alt="" className=" object-fill h-[350px]" />
        </div>
        </Link>
      );
    })}
  </div>
</section>

  );
};

export default Airing;
