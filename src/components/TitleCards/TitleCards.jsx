import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef } from "react";

const TitleCards = () => {
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault;
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>Popular on Netflix</h2>
      <div className="card_list" ref={cardRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
