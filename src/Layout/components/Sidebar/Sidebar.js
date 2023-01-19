import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/Config";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import { Avatar } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import {
  BackHomeIcon,
  BackHomeIconActive,
  LibraryIcon,
  LibraryIconActive,
  LikedIcon,
  LikedIconActive,
  PlayIcon,
  ShortIcon,
  SubcriptionIcon,
  SubcriptionIconActive,
  WatchedIcon,
  WatchinFutureIcon,
} from "~/Components/Icons";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { ContextStore } from "~/Components/store";
import { useContext } from "react";
// import { useContext } from "react";
// import { buttonState } from "../Header/Header";
const cx = classNames.bind(styles);
function Sidebar() {
  const state = useContext(ContextStore);
  return (
    <div className={cx('container')}>
          {state[0].menu ? (
          <div className={cx("wrapper")}>
            <Menu>
              <div className={cx("start")}>
                <MenuItem
                  title="Trang chủ"
                  to={config.routes.home}
                  icon={<BackHomeIcon />}
                  activeicon={<BackHomeIconActive />}
                />
                <MenuItem
                  title="Shorts"
                  to={config.routes.shorts}
                  icon={<ShortIcon />}
                  activeicon={<ShortIcon />}
                />
                <MenuItem
                  title="Kênh đăng ký"
                  to={config.routes.subscription}
                  icon={<SubcriptionIcon />}
                  activeicon={<SubcriptionIconActive />}
                />
              </div>
              <div className={cx("start")}>
                <MenuItem
                  title="Thư viện"
                  to={config.routes.library}
                  icon={<LibraryIcon />}
                  activeicon={<LibraryIconActive />}
                />
                <MenuItem
                  title="Video đã xem"
                  to={config.routes.history}
                  icon={<WatchedIcon />}
                  activeicon={<WatchedIcon />}
                />
                <MenuItem
                  title="Video của bạn"
                  to={config.routes.yours}
                  icon={<PlayIcon />}
                  activeicon={<PlayIcon />}
                />
                <MenuItem
                  title="Xem sau"
                  to={config.routes.plan}
                  icon={<WatchinFutureIcon />}
                  activeicon={<WatchinFutureIcon />}
                />
                <MenuItem
                  title="Video đã thích"
                  to={config.routes.liked}
                  icon={<LikedIcon />}
                  activeicon={<LikedIconActive />}
                />
              </div>
              <div className={cx("start", "center")}>
                <h4>Kênh đăng ký</h4>
                <Link to="/@F8VNOfficial">
                  <div className={cx("avatar")}>
                    <Avatar
                      alt="F8"
                      src="https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s88-c-k-c0x00ffffff-no-rj"
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <span>F8 Official</span>
                  </div>
                </Link>
                <Link to="/@jomaoppa">
                  <div className={cx("avatar")}>
                    <Avatar
                      alt="Joma Tech"
                      src="https://yt3.ggpht.com/ytc/AMLnZu9W2h9scoXcwnKhrhI0qeCL34DXNbamX-rBosaN=s88-c-k-c0x00ffffff-no-rj"
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <span>Joma Tech</span>
                  </div>
                </Link>
                <Link to="/@linhei6052">
                  <div className={cx("avatar")}>
                    <Avatar
                      alt="Linh Ei"
                      src="https://yt3.ggpht.com/ytc/AMLnZu_ImUr48CfUbQasL2Iq7wpUvhmp5UZkGa4TUO5pkA=s88-c-k-c0x00ffffff-no-rj"
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <span>Linh Ei</span>
                  </div>
                </Link>
                <Link to="/@LienQuanMobileeSportsGarena">
                  <div className={cx("avatar")}>
                    <Avatar
                      alt="Garena Liên Quân Mobile"
                      src="https://yt3.ggpht.com/tzxOlJv4g6HPRnWsWSXshk3374jVkLxI-BKV2tzNAs7Cj1-j1P0h35yygJ6dMVzHhfgGQ3vxeA=s88-c-k-c0x00ffffff-no-rj"
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <span>Garena Liên Quân Mobile</span>
                  </div>
                </Link>
              </div>
              <div className={cx("start", "end")}>
                <MenuItem
                  title="Cài đặt"
                  to={config.routes.settings}
                  icon={<SettingsSuggestTwoToneIcon sx={{ fontSize: 30 }} />}
                  activeicon={<SettingsSuggestTwoToneIcon sx={{ fontSize: 30 }} />}
                />
                <MenuItem
                  title="Nhật ký báo cáo"
                  to={config.routes.dairy}
                  icon={<FlagOutlinedIcon sx={{ fontSize: 30 }} />}
                  activeicon={<FlagOutlinedIcon sx={{ fontSize: 30 }} />}
                />
                <MenuItem
                  title="Trợ giúp"
                  to={config.routes.help}
                  icon={<HelpOutlineOutlinedIcon sx={{ fontSize: 30 }} />}
                  activeicon={<HelpOutlineOutlinedIcon sx={{ fontSize: 30 }} />}
                />
                <MenuItem
                  title="Gửi ý kiến phản hồi"
                  to={config.routes.report}
                  icon={<AnnouncementOutlinedIcon sx={{ fontSize: 30 }} />}
                  activeicon={<AnnouncementOutlinedIcon sx={{ fontSize: 30 }} />}
                />
              </div>
            </Menu>
            </div>
          ) : (
            <Menu>        
                <MenuItem
                  title="Trang chủ"
                  to={config.routes.home}
                  flex__column="flex__column"
                  icon={<BackHomeIcon />}
                  activeicon={<BackHomeIconActive />}
                />
                <MenuItem
                  title="Shorts"
                  to={config.routes.shorts}
                  flex__column="flex__column"
                  icon={<ShortIcon />}
                  activeicon={<ShortIcon />}
                />
                <MenuItem
                  title="Kênh đăng ký"
                  to={config.routes.subscription}
                  flex__column="flex__column"
                  icon={<SubcriptionIcon />}
                  activeicon={<SubcriptionIconActive />}
                />
                 <MenuItem
                  title="Thư viện"
                  to={config.routes.library}
                  flex__column="flex__column"
                  icon={<LibraryIcon />}
                  activeicon={<LibraryIconActive />}
                />
        
            </Menu>
          )}
    </div>
  );
}

export default Sidebar;
