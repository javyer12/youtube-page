import React from "react";

import "../../style/Header.scss";
import camara from "../../style/icon/camara1.png";
import appMenu from "../../style/icon/menu.png";
import notification from "../../style/icon/notifi.png";

const HeaderOption = () => {
    return (
        <nav className=" header_option ">
            <img  src={camara} alt="camara" className=" camara_icon" />
            <img src={appMenu} alt="app_menu" className=" app_icon" />
            <img src={notification} alt="notification" className=" notifi_icon" />
            <img src='https://yt3.ggpht.com/ytc/AKedOLSQIW4Q17yUnw99L_pxatJGcSrLZ_uVi9gMhhG-jw=s900-c-k-c0x00ffffff-no-rj' alt='profile' />
        </nav>
    )
}

export default HeaderOption;
