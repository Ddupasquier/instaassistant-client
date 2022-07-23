import { fetchMissions } from "../../api/missions";
import { FETCH_MISSIONS, FETCH_SUCCESS, FETCH_FAIL } from "./ActionTypes";

export const GetMissions = () => async (dispatch) => {
  dispatch({ type: FETCH_MISSIONS });
  fetchMissions()
    .then((data) => {
      dispatch({
        type: FETCH_SUCCESS,
        missions: data,
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_FAIL });
    });
};
