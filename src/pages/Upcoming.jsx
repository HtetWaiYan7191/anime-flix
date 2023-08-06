import React from "react";
import { useSelector } from "react-redux";

const Upcoming = () => {
  const allAnime = useSelector((state) => state.popular.value);
  const upcomingAnime = allAnime.filter((anime) => anime.status === "Finished Airing");
  console.log(upcomingAnime)

  return (
    <section className="upcoming-section">
      <div className="upcoming-container">
        {upcomingAnime.map((anime) => (
          <div className="upcoming-card">{anime.title}</div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
