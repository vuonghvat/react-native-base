import {SAVE_TOKEN} from './actions';
const initState = {
  access_token: null,
};
function appReducer(state = initState, action: any) {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        access_token: action.data,
      };
    default:
      return state;
  }
}

export default appReducer;
