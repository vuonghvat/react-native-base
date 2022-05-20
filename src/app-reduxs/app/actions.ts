import makeActionCreator from '@app/app-reduxs/actionMaker';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';

 const saveTokenAction = makeActionCreator(SAVE_TOKEN, 'data');
 const saveUserAction = makeActionCreator(SAVE_DATA_USER, 'data');

const AppActions = {
    saveTokenAction,
    saveUserAction,
  };
  export default AppActions;
  