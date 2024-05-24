const initialState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      break;
    default:
      console.log("ttttt");
      return {
        ...state,
        isLoggedIn: true,
        token: 123,
      };
  }
};

export default authReducer;
