import classNames from "classnames/bind";
import { Button } from "@mui/material";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const cx = classNames.bind(styles);
const Menu = [
  "Tất cả",
  "Âm nhạc",
  "Trực tiếp",
  "Trò chơi",
  "Hài kịch tình huống",
  "Hoạt họa",
  "Bóng đá",
  "Nấu ăn",
  "Mới tải lên gần đây",
];

function Home() {
  const [state, setState] = useState(0);
  useEffect(() => {
    //callAPI
  }, [state]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        {Menu.map((Menuitem, index) => {
          return (
            <Button
              key={index}
              variant="outlined"
              className={cx("channel", { active: state === index })}
              onClick={() => setState(index)}
            >
              {Menuitem}
            </Button>
          );
        })}
      </div>
      <div className={cx("center")}>
        <div className={cx("item")}>
          <a  href="https://www.youtube.com/watch?v=PoXDg2saXX8">
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          </a>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("thumnbail")}>
            <img src="https://i.ytimg.com/vi/PoXDg2saXX8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJa2uk9BEnLWHkRQC2zzDfDBB5OA" alt="" />
          </div>
          <div className={cx("description")}>
            <Avatar
              alt=""
              src="https://yt3.ggpht.com/ytc/AMLnZu8jW0B9hobTMX0vlcWKdTiSa8jLJ8evLVuA4wFtbQ=s68-c-k-c0x00ffffff-no-rj"
              sx={{ width: 36, height: 36,marginRight:1 }}
            ></Avatar>
            <div className={cx("information")}>
              {/* title */}
              <span className={cx('title')}>Huỳnh James x Pjnboys - Mong Một Ngày Anh Nhớ Đến Em | The Heroes 2022 Thần Tượng Đối Thần Tượng</span>
              {/* authors */}
              <span className={cx('author')}>VIVA music</span>
              {/* views and timePublish */}
              <div className={cx('details')}>
                <span>2Tr lượt xem</span>
                <FiberManualRecordIcon sx={{ fontSize: 10,marginRight:1,color:'#a99696' }} ></FiberManualRecordIcon>
                <span>9 ngày trước</span>
              </div>
            </div>
            <MoreVertIcon fontSize="large" className={cx('more')}></MoreVertIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
