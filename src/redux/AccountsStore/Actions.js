import { indexAccounts } from '../../api';
import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAIL,
} from './ActionTypes';

export const GetAccounts = () => async (dispatch) => {
  dispatch({ type: FETCH_ACCOUNT });
  indexAccounts()
    .then((data) => {
      dispatch({
        type: FETCH_ACCOUNT_SUCCESS,
        accounts: data,
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_ACCOUNT_FAIL });
    });
};
