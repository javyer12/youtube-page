import React, {useState} from "react";
import "../style/Video.scss";
const Video = () => {
    const [title,setTitle] = useState("F.G.CHA");
    const [titleDesc,setTitleDesc] = useState("this a new video ");
  return (
    <div className="video_card shadow-lg  mb-5 bg-body rounded">
      <div className="media_card">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSQIW4Q17yUnw99L_pxatJGcSrLZ_uVi9gMhhG-jw=s900-c-k-c0x00ffffff-no-rj"
          alt="video"
        />
      </div>

      <div className="video_info">
        <div className="image_profile">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSQIW4Q17yUnw99L_pxatJGcSrLZ_uVi9gMhhG-jw=s900-c-k-c0x00ffffff-no-rj"
            alt="profile"
          />
        </div>
        <div className="media_title">{title}</div>
      </div>

      <div className="video_description">{titleDesc}</div>
    </div>
  );
};

export default Video;
