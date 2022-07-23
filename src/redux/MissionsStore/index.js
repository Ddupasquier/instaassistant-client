import { FETCH_MISSIONS, FETCH_SUCCESS, FETCH_FAIL } from "./ActionTypes";

const initState = {
  Missions: [],
  Loading: false,
  Error: "",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, Loading: true };
    case FETCH_SUCCESS:
      return { ...state, Loading: false, Missions: action.missions, Error: "" };
    case FETCH_FAIL:
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
