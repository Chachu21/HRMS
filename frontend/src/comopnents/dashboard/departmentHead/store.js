import { createStore } from "redux";

// Define your initial state
const initialState = {
  jobRankData: [],
  forwardedData: null,
};

// Define your reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB_RANK_DATA":
      return { ...state, jobRankData: action.payload };
    case "SET_FORWARDED_DATA":
      return { ...state, forwardedData: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
