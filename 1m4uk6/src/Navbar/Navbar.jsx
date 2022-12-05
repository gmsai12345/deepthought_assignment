import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import Vector from "..//Assets/Vector.png";
import photo from "..//Assets/photo.png";
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
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
