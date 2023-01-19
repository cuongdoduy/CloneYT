export const initState={
    menu:true,
    setSearchResult:true,
};
 async function reducer(state,action)
{
    switch(action)
    {
        case "toggle": 
        {
            state.menu=!state.menu;
            return {...state};
        }
        case "show":
        {
            state.setSearchResult=true;
            return {...state};
        }
        case "unshow":
        {
            console.log(3);
            state.setSearchResult=false;
            return {...state};
        }
    }
 }
export default reducer;
