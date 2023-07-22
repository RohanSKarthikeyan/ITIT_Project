import { useActionData } from "react-router-dom";

export const initialState = {
    user: null,
};

const reducer = (state,action) =>{
    
    switch(action.type){
        
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
      
        case 'REGISTERED_USER' :
            return{
                ...state,
            
            }   
        default:
        return state;
    }
};

export default reducer;