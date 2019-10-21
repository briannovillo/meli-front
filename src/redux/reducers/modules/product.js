const initialState = {
  isFetching: false,
  product: null,
  products: null,
  errorMessage: null,
  errorCode: null,
  breadcrumb: [
    { text: 'Algo' },
    { text: 'Una mas' },
    { text: 'Otra mas' },
    { text: 'La ultima' }
  ]
};

export const PRODUCT_GET_FETCHING = 'PRODUCT_GET_FETCHING';
export const PRODUCT_GET_FETCHED = 'PRODUCT_GET_FETCHED';
export const PRODUCT_GET_FETCH_FAILED = 'PRODUCT_GET_FETCH_FAILED';

export const PRODUCT_SEARCH_FETCHING = 'PRODUCT_SEARCH_FETCHING';
export const PRODUCT_SEARCH_FETCHED = 'PRODUCT_SEARCH_FETCHED';
export const PRODUCT_SEARCH_FETCH_FAILED = 'PRODUCT_SEARCH_FETCH_FAILED';

export function productGetFetch(id) {
  return {
    type: PRODUCT_GET_FETCHING,
    payload: {
      id
    }
  };
}

export function productGetFetched(product) {
  return {
    type: PRODUCT_GET_FETCHED,
    payload: {
      product
    }
  };
}

export function productGetFetchFailed(message, code = 404) {
  return {
    type: PRODUCT_GET_FETCH_FAILED,
    payload: {
      message,
      code
    }
  };
}

export function productSearchFetch(query) {
  return {
    type: PRODUCT_SEARCH_FETCHING,
    payload: {
      query
    }
  };
}

export function productSearchFetched(products) {
  return {
    type: PRODUCT_SEARCH_FETCHED,
    payload: {
      products
    }
  };
}

export function productSearchFetchFailed(message, code = 404) {
  return {
    type: PRODUCT_SEARCH_FETCH_FAILED,
    payload: {
      message,
      code
    }
  };
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_GET_FETCHING:
    case PRODUCT_SEARCH_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case PRODUCT_GET_FETCHED:
      return {
        ...state,
        isFetching: false,
        product: action.payload.product,
        products: null,
        errorMessage: null,
        errorCode: null
      };
    case PRODUCT_SEARCH_FETCHED:
      return {
        ...state,
        isFetching: false,
        product: null,
        products: action.payload.products,
        errorMessage: null,
        errorCode: null
      };
    case PRODUCT_SEARCH_FETCH_FAILED:
    case PRODUCT_GET_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        product: null,
        products: null,
        errorMessage: action.payload.message,
        errorCode: action.payload.code
      };
    default:
      return state;
  }
};
