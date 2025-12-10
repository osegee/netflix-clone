import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="caption_img" className="caption_img" />
          <p>
            Discovering his ties to a secret acient order, a young man living in
            modern Istanbul embarks on aquest to save the cith from immortal
            enemy
          </p>
          <div className="hero_btn">
            <button className="btn">
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="play_icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more_cards">
        <TitleCards />
        <TitleCards />
        <TitleCards />
        <TitleCards />
      </div>
    </div>
  );
};

export default Home;
