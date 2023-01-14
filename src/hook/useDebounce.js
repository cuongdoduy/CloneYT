import { useEffect, useState } from "react";

function useDebounce(value,delay) {
    const [debounceValue,setdebounceValue]=useState(value)
    useEffect(()=>{
        const handle = setTimeout(()=>setdebounceValue(value),delay)
        return () => clearTimeout(handle);
        // eslint-disable-next-line
    },[value]);
    return debounceValue;
}

export default useDebounce; 