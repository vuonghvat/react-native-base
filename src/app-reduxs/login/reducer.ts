import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './actions';
const initState = {
  user: null,
  isLoading: false,
  error: null,
};
function loginReducer(state = initState, action: any) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };
    default:
      return state;
  }
}

export default loginReducer;
