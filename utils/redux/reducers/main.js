const initialState = {
  test: "Lorem Ipsum",
  user: {},
  isLogin: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
