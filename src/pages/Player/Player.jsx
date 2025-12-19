import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="back_arrow_icon" />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/fS_TgZRk4bk"
        title="trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
