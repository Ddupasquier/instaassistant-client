import { indexAccounts } from "../../api";
import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
} from "./ActionTypes";

export const GetAccounts = () => async (dispatch) => {
  dispatch({ type: FETCH_ACCOUNTS });
  indexAccounts()
    .then((data) => {
      dispatch({
        type: FETCH_ACCOUNTS_SUCCESS,
        accounts: data,
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_ACCOUNTS_FAIL });
    });
};

