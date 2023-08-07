import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="characters-container my-5">
      <h2 className="text-4xl text-gray-700 font-semibold text-center my-10">
        Characters{" "}
        <span className="text-red-500 text-5xl">{`(${characters.length})`}</span>
      </h2>
      {characters.length !== 0 ? (
        <div className="character-card-container grid bg-white grid-cols-6 gap-5 w-[90%] mx-auto my-5 h-[700px] overflow-y-scroll p-10">
          {characters.map((character) => (
            <div className="" key={character.mal_id}>
              <figure className="chr-img-container character-card rounded-md overflow-hidden ">
                <img
                  src={character.character.images.jpg.image_url}
                  alt=""
                  className=" w-[100%]  "
                />
              </figure>
              <div className="character-name flex flex-col ">
              <span className=" font-semibold text-sm">{character.character.name}</span>
              <span className="text-sm opacity-80">{character.role}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>Character not available</h2>
      )}
    </div>
  );
};

export default Characters;
