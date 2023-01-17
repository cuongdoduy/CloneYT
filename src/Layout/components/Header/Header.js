import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import config from "~/Config";
import { Icon } from "~/Components/Icons";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import Search from "~/Components/Search/Search";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tippy from "@tippyjs/react";
// import { useState } from "react";
import { ContextStore } from "~/Components/store";
import { useContext } from "react";
const cx = classNames.bind(styles);
// export const buttonState=createContext();
function Header() {

  const [state,dispatch]=useContext(ContextStore);
  return (
    // <buttonState.Provider value={state} >
      <div className={cx("wrapper")}>
        <div className={cx('start')}>
          <ReorderOutlinedIcon sx={{ fontSize: 25 }} className={cx('icon2')} onClick={()=>dispatch("toggle")}/>
          <Link to={config.routes.home}>
            <div className={cx("logo")}>
               <Icon className={cx('icon')}/>
            </div>
          </Link>
        </div>
        <div className={cx('center')}>
          <Search></Search>
        </div>
        <div className={cx('end')}>
           <Tippy content="Tạo" placement="bottom" className={cx('title')}>
             <VideoCallIcon className={cx('action_icon')}></VideoCallIcon>
           </Tippy>
           <Tippy content="Thông báo" placement="bottom" className={cx('title')}  >
             <NotificationsNoneIcon className={cx('action_icon')}></NotificationsNoneIcon>
           </Tippy>
           <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7183294086862405638~c5_720x720.jpeg?x-expires=1672981200&x-signature=ZpDc4CvzLQcXWhIxBLHnTWdkgLY%3D" alt="Avatar" className={cx('avatar')}></img>
        </div>
      </div>
    // </buttonState.Provider>
  );
}

export default Header;
