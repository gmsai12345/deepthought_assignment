import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import Vector from "..//Assets/Vector.png";
import photo from "..//Assets/photo.png";
import Rectangle1440 from "..//Assets/Rectangle1440.png";
import image11 from "..//Assets/image11.png";
import image9 from "..//Assets/image9.png";
import Rectangle1442 from "..//Assets/Rectangle1440.png";
export default function () {
  return (
    <div>
      <div>
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
          className="logo"
        />
        <img src={HomeIcon} alt="" classname="home-button" />
        <img src={ConstructionIcon} alt="" className="tools" />
        <img src={Vector} alt="" className="Vector" />
        <img src={photo} alt="" className="photo" />
        <img src={Rectangle1440} alt="" className="rect" />
        <img src={image11} alt="" className="text" />
        <img src={Rectangle1442} alt="" className="blank" />
        <span></span>
      </div>
    </div>
  );
}
