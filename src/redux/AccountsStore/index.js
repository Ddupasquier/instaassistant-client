import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAIL,
} from './ActionTypes';

const initState = {
  Accounts: [],
  Loading: null,
  Error: '',
};

function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return { ...state, Loading: true };
    case FETCH_ACCOUNT_SUCCESS:
      return { ...state, Loading: false, Accounts: action.accounts, Error: '' };
    case FETCH_ACCOUNT_FAIL:
      return {
        ...state,
        Loading: false,
        Missions: [],
        Errors: 'Could not retrieve missions.',
      };
    default:
      return state;
  }
}

export default reducer;
