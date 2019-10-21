import { all } from 'redux-saga/effects';
import { productSaga } from './modules/product';

export default function* root() {
  yield all([
    ...productSaga
  ]);
}
