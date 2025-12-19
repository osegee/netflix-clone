import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ5YWNmYWJjYjc2NjNkYjc2Mzg5OGQ3MjI3OWI1MCIsIm5iZiI6MTc1Njk4MDA1My45NDgsInN1YiI6IjY4Yjk2MzU1YzliOTA4NDZmMTA2OGQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAHphTr28Sxg56p7OhWBpnBXdPUvbGcbBHGN4r_zyFs",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault;
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
