const initialSatate = {
  counter: 0,
  userDetail: {},
};

function rootReducer(state = initialSatate, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: action.payload.length };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "USER_DETAIL":
      return { userDetail: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
