import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailAnime, fetchCharacters } from "../redux/detailSlice";
import "../styles/Details.css";
import Characters from "../components/Characters";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailAnime = useSelector((state) => state.detail.value);
  const characters = useSelector((state) => state.detail.characters);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(fetchDetailAnime(id));
    dispatch(fetchCharacters(id));
  }, []);

  return (
    <section className="detail-section bg-gray-300/70 py-32">
      <div className="detail-container bg-white/80 w-[80%] mx-auto p-10 relative ">
        <div className="back-button absolute top-0 left-0"></div>
        <header className="detail-header flex justify-center mb-5">
          <h2 className="text-3xl font-semibold">{detailAnime.title}</h2>
        </header>

        <div className="detail-information-card flex    flex-wrap w-[80%] mx-auto my-10">
          {detailAnime.images && detailAnime.images.jpg && (
            <figure className="img-container flex-1 flex justify-center ">
              <img src={detailAnime.images.jpg.image_url} alt="" />
            </figure>
          )}

          {detailAnime.aired && detailAnime.aired.prop && (
            <ul className="information flex-1 justify-around flex flex-col">
              <li>
                Aired:{" "}
                <span>
                  {`${detailAnime.aired.prop.from.day}-${
                    detailAnime.aired.prop.from.month
                  }-${detailAnime.aired.prop.from.year} To ${
                    detailAnime.aired.prop.to.day
                      ? `${detailAnime.aired.prop.to.day}-${detailAnime.aired.prop.to.month}-${detailAnime.aired.prop.to.year}`
                      : `Currently Airing`
                  }`}
                </span>{" "}
              </li>
              <li>
                Rating: <span>{detailAnime.rating}</span>
              </li>
              <li>
                Rank: <span>{detailAnime.rank}</span>
              </li>
              <li>
                Score <span>{detailAnime.scored}</span>:
              </li>
              <li>
                Scored By: <span>{detailAnime.scored_by}</span>
              </li>
              <li>
                Status: <span>{detailAnime.status}</span>
              </li>
              <li>
                Source: <span>{detailAnime.source}</span>
              </li>
              <li>
                Season: <span>{detailAnime.season}</span>
              </li>
              <li>
                Duration: <span>{detailAnime.duration}</span>
              </li>
            </ul>
          )}
        </div>

        {detailAnime.synopsis && (
          <div className="para-container mt-5 w-[65%] mx-auto ">
            <p className="p-4">
              {showMore
                ? detailAnime.synopsis
                : detailAnime.synopsis?.substring(0, 450) + "..."}{" "}
              <button
                className="text-green-500"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? `See Less` : `See More`}
              </button>{" "}
            </p>
          </div>
        )}
      </div>

      <div className="endLine border border-black/30 mt-5" />

      <div className="trailer-container   w-[80%] mx-auto p-10 my-5">
        <h2 className="text-4xl text-gray-700 font-semibold text-center">
          Trailer
        </h2>
        {detailAnime.trailer ? (
          <div className="trailer-video mt-8 mb-5 flex justify-center bg-white/80 p-4 w-[650px] mx-auto rounded-md">
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${detailAnime.trailer.youtube_id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <h2>There is no trailer</h2>
        )}
      </div>

      <div className="endLine border border-black/30 mt-5" />
      
      <Characters characters={characters} />

      <div className=" border-black/30 border mt-28" />
    </section>
  );
};

export default Details;
