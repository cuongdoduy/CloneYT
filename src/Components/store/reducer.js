export const initState=true;
function reducer(state,action)
{
    switch(action)
    {
        case "toggle": return !state  ;
    }
 }
export default reducer;
