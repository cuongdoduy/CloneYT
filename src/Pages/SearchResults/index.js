import {useLocation} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from "./SearchResults.module.scss"
import { Avatar } from '@mui/material';
import { Fragment } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const cx=classNames.bind(styles);

function SearchResult({children,item}) {
    const location = useLocation();
    // console.log(location.state.data);
    location.state.data.length=10;
    // console.log(location.state.data);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <FilterAltIcon fontSize='large'></FilterAltIcon>
                <span>Bộ lọc</span>
            </div>
           
            {location.state.data.map((item,index)=>{
                if (item.video)
                
                return (
                    <div className={cx('start')} key={index}>
                            <img className={cx('thumnbail')} src={item.video.thumbnails[0].url} alt=""></img>
                            <div className={cx('descriptions')}>
                                    <span className={cx('title')}>{item.video.title}</span>
                                    <div className={cx('views-times')}>
                                        <span className={cx('views')}>{item.video.stats.views} lượt xem</span>
                                        <span className={cx('times')}>{item.video.publishedTimeText}</span>
                                    </div>
                                    <div className={cx('authors')}>
                                        <Avatar src={item.video.author.avatar[0].url} sx={{ width: 24, height: 24,marginRight:1 }} alt=""></Avatar>
                                        <span className={cx('author')}>{item.video.author.title}</span>
                                    </div>
                                    <span className={cx('moredetails')}>{item.video.descriptionSnippet}</span>
                                    <span className={cx('badgets')}>{item.video.badges[0]}</span>
                            </div>
                    </div>
                )
                else return <Fragment></Fragment>
            })}
        </div>
     );
}

export default SearchResult;