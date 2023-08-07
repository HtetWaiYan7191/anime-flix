import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingAnime } from "../redux/upcomingSlice";
import "../styles/Upcoming.css";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcomingAnime = useSelector((state) => state.upcoming.value);

  useEffect(() => {
    dispatch(fetchUpcomingAnime());
  }, []);

  return (
    <section className="upcoming-section pt-28">
      <div className="upcoming-container grid grid-cols-6 gap-5 p-[20px]">
        {upcomingAnime.map((anime) => (
          <Link to={`/details/${anime.mal_id}`} key={anime.mal_id}>
            <div className="upcoming-card" >
              <img src={anime.images.jpg.image_url} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
