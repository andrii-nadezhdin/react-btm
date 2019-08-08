import { put, takeLatest, delay } from 'redux-saga/effects';
import { Actions } from '../constants';

function* userLogin(action) {
    yield put({
        type: Actions.USER_LOGIN_INPROCESS
    });
    yield delay(3000);
    yield put({
        type: Actions.USER_LOGIN,
        userName: action.userName
    });
 }

 export default function* () {
    yield takeLatest(Actions.INITIATE_USER_LOGIN, userLogin);
  }