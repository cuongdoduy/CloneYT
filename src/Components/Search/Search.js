import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Tippy from "@tippyjs/react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState,useEffect,useRef } from "react";
import axios from "axios";
import useDebounce from "~/hook/useDebounce";
import { Wrapper } from "../Proper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
 
} from "@fortawesome/free-solid-svg-icons";

const cx=classNames.bind(styles);
function Search() {
    const [searchResult,SetsearchResult]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    // const [showResult,setShow]=useState(false);
    // const [loading,setLoading]=useState(false);
    const debounceValue=useDebounce(searchValue,300);
    const inputRef=useRef();

    useEffect(()=>{

      if (!debounceValue.trim()) {
        SetsearchResult([]);
        return;
      }
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/auto-complete/',
        params: {q:debounceValue,gl:"VN"},
        headers: {
          'X-RapidAPI-Key': '5f40e58276mshb1b42a02f089a19p1ad273jsn97a8d4ed1e5d',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then((response)=> SetsearchResult(response.data.results));
    },[debounceValue]);
    // console.log(searchResult);
    return (  
        <div className={cx('wrapper')}>
            <Tippy
            visible={searchResult.length>0}
            // tabindex="-1"
            interactive
            
            render={(attrs) => (
              <div {...attrs} className={cx("search-result")}>
               {searchResult.length > 0 && (
                 <Wrapper>
                 {searchResult.map((item,index)=>{
                     return <div key={index} className={cx('result')}>
                        <SearchIcon sx={{ fontSize: 30 }} ></SearchIcon>
                           <p>    {item}</p>
                       </div>
                 })}
                 </Wrapper>
               )}  
              </div>
                )}
            >
            <div className={cx('search')}>
                <SearchIcon sx={{ fontSize: 25 }} className={cx('left-icon')}></SearchIcon>
                <input
                placeholder="Tìm kiếm"
                value={searchValue}
                ref={inputRef}
                onChange={(e)=>
                  {
                    const searchValue = e.target.value;
                    if (!searchValue.startsWith(' ')) {
                        setSearchValue(searchValue);
                    }
                  }}
                />                
                {!!searchValue && (<button className={cx("clear")} onClick={()=>
                  {
                    setSearchValue('');
                    inputRef.current.focus();
                  }}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>)}
                 <div className={cx('search-btn')}>
                     <SearchIcon sx={{ fontSize: 30 }} ></SearchIcon>
                 </div>
            </div>
            </Tippy>
            <div className={cx('icon')}>
            <KeyboardVoiceIcon sx={{fontSize:30}}></KeyboardVoiceIcon>
            </div>
        </div>
    );
}

export default Search
