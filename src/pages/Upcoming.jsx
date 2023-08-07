import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingAnime } from "../redux/upcomingSlice";
import '../styles/Upcoming.css'

const Upcoming = () => {
   const dispatch = useDispatch();
   const upcomingAnime = useSelector((state) => state.upcoming.value)

   useEffect(() => {
    dispatch(fetchUpcomingAnime())
   },[])

  return (
    <section className="upcoming-section">
      <div className="upcoming-container grid grid-cols-6 gap-5 p-[20px]">
        {upcomingAnime.map((anime) => (
          <div className="upcoming-card" key={anime.mal_id}>
            <img src={anime.images.jpg.image_url} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
