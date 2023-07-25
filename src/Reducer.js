export const initialState = {
    user: null,
    role: null,
    name: null,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
      case 'REGISTERED_USER':
        return {
          ...state,
          name: action.name, 
          email: action.email,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  