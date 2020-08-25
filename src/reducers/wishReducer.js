 

const wishReducer = (state=[], action)=>{
   
    if(action.type==='ADD_WISHES'){
        return [...state, action.payload]
    }
    return state;
}
export default wishReducer;