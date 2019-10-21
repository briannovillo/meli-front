import { put, takeEvery } from 'redux-saga/effects';
import {
  productGetFetched,
  productGetFetchFailed,
  productSearchFetched,
  productSearchFetchFailed,
  PRODUCT_GET_FETCHING,
  PRODUCT_SEARCH_FETCHING
} from '../../reducers/modules/product';
import ProductApi from '../../services/modules/product';

export function* getProduct(action) {
  try {
    const response = yield ProductApi.get(action.payload.id);

    if (!response.item) {
      yield put(productGetFetchFailed(response.error, response.code));
    } else {
      yield put(productGetFetched(response.item));
    }
  } catch (e) {
    yield put(productGetFetchFailed(e.message, 500));
  }
}

export function* searchProduct(action) {
  try {
    const response = yield ProductApi.search(action.payload.query);
    if (!response.items) {
      yield put(productSearchFetchFailed(response.error, response.code));
    } else {
      yield put(productSearchFetched(response.items));
    }
  } catch (e) {
    yield put(productSearchFetchFailed(e.message, 500));
  }
}

export const productSaga = [
  takeEvery(PRODUCT_GET_FETCHING, getProduct),
  takeEvery(PRODUCT_SEARCH_FETCHING, searchProduct),
];
