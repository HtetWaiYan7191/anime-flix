import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Airing = () => {
  const allAnime = useSelector((state) => state.popular.value);
  const airingAnime = allAnime.filter((anime) => anime.airing === true);

  return (
    <section className='airing-section'>
  <div className='airing-container flex flex-wrap gap-5'>
    {airingAnime.map((anime) => {
      return (
        <div className='airing-card' key={anime.id}> {/* Make sure to add a unique key prop */}
          <img src={anime.images.jpg.image_url} alt="" />
        </div>
      );
    })}
  </div>
</section>

  );
};

export default Airing;
