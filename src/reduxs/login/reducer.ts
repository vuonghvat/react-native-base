import {SAVE_TOKEN} from './actions';
const initState = {
  user: null,
};
function loginReducer(state = initState, action: any) {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default loginReducer;
