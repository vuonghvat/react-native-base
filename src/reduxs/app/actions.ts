import makeActionCreator from '@app/reduxs/actionMaker';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';

export const saveTokenAction = makeActionCreator(SAVE_TOKEN, 'access_token');
export const saveUserAction = makeActionCreator(SAVE_DATA_USER, 'data_user');
