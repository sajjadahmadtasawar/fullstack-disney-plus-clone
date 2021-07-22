export const initialState = {
  user: null,
  recommended: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'REMOVE_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'RECOMMENDED':
      return {
        ...state,
        recommended: action.recommended,
      };
    case 'NEWDISNEY':
      return {
        ...state,
        newDisney: action.newDisney,
      };
    case 'ORIGINALS':
      return {
        ...state,
        originals: action.originals,
      };
    case 'TRENDING':
      return {
        ...state,
        trending: action.trending,
      };

    default:
      return state;
  }
};

export default reducer;
