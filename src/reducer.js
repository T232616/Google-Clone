export const initialState = {
    term : null
}
export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM"
}
const reducer = (action,state)=>{
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term : action.term
            }
            break;
    
        default:
            return state;
            break;
    }
}
export default reducer;