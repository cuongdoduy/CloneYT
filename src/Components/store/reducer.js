export const initState={
    menu:true,
};
function reducer(state,action)
{
    switch(action)
    {
        case "toggle": 
        {
            state.menu=!state.menu;
            return {...state};
        }
        default: throw new Error("Invalid");
        
    }
 }
export default reducer;
