import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
} from "./ActionTypes";

const initState = {
  accounts: [],
  Loading: false,
  Error: "",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return { ...state, Loading: true };
    case FETCH_ACCOUNTS_SUCCESS:
      return { ...state, Loading: false, Missions: action.missions, Error: "" };
    case FETCH_ACCOUNTS_FAIL:
      return {
        ...state,
        Loading: false,
        Missions: [],
        Errors: "Could not retrieve missions.",
      };
    default:
      return state;
  }
}

export default reducer;
