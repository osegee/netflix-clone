import React from "react";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_icons">
          <img src={youtubeIcon} alt="youtubeIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={instagramIcon} alt="instagramIcon" />
          <img src={facebookIcon} alt="facebookIcon" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className="copyright_text">&copy; 1997-2024 Netflix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
