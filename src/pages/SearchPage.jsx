import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAiringSearchAnime, fetchSearchAnime } from "../redux/searchSlice";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const { name } = useParams();
  const searchAnime = useSelector((state) => state.search.value);
  // const airingAnime = useSelector((state) => state.search.airingAnime);
  // const upcomingAnime = useSelector((state) => state.search.upcomingAnime);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchAnime.length === 0) {
      dispatch(fetchSearchAnime(name));
    } else {
      dispatch(fetchAiringSearchAnime(name));
    }
  }, []);
  

  return (
    <section className="search-page py-32">
      <div className="search-page-container grid grid-cols-5 p-10">
        {searchAnime.length !== 0 &&
          searchAnime.map((anime) => (
            <Link to={`/details/${anime.mal_id}`} key={anime.mal_id}>
              <div className="search-page-card" key={anime.id}>
                <img src={anime.images.jpg.image_url} alt="" />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default SearchPage;
