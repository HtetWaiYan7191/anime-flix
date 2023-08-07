import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiringAnime } from "../redux/airingSlice";
import '../styles/Airing.css'

const Airing = () => {
  const airingAnime = useSelector((state) => state.airing.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAiringAnime())
  })

  return (
    <section className='airing-section'>
  <div className='airing-container grid grid-cols-6 gap-5 p-[20px]'>
    {airingAnime.map((anime) => {
      return (
        <div className='airing-card' key={anime.id}> {/* Make sure to add a unique key prop */}
          <img src={anime.images.jpg.image_url} alt="" className=" object-fill h-[350px]" />
        </div>
      );
    })}
  </div>
</section>

  );
};

export default Airing;
