import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Tippy from "@tippyjs/react/headless";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState,useEffect,useRef } from "react";
import axios from "axios";
import useDebounce from "~/hook/useDebounce";
import { Wrapper } from "../Proper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCircleXmark,
 
} from "@fortawesome/free-solid-svg-icons";
import config from "~/Config";
const cx=classNames.bind(styles);

function Search() {
    const navigate=useNavigate();
    const [searchResult,SetsearchResult]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    const [showResult,setShow]=useState(true);
    const toComponentB=async (item)=>{
    const res= await handleResult(item);
     setShow(false);
      navigate(config.routes.searchresult,{state:{id:1,data:res}});    
        }
    const debounceValue=useDebounce(searchValue,200);
    const inputRef=useRef();
    const handleResult=async (value)=>{
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: {q:value, gl: 'VN'},
        headers: {
          'X-RapidAPI-Key': '72d6914352mshc690f161e920babp162ca1jsnce9ba93a8327',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      
      const res=await axios.request(options)
      .then(response=>response.data.contents);
      return res;
      }
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
          'X-RapidAPI-Key': '72d6914352mshc690f161e920babp162ca1jsnce9ba93a8327',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then((response)=> SetsearchResult(response.data.results));
    },[debounceValue]);
      
      
    
    return (  
      
        <div className={cx('wrapper')}>
            <Tippy
            visible={searchResult.length>0 && showResult}
            // tabindex="-1"
            interactive
            onClickOutside={()=>setShow(false)}
            render={(attrs) => (
              <div {...attrs} className={cx("search-result")}>
               {searchResult.length > 0 && (
                 <Wrapper>
                 {searchResult.map((item,index)=>{
                     return <div key={index} className={cx('result')}  onClick={()=>toComponentB(item)} >
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
                onFocus={()=>setShow(true)}
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
