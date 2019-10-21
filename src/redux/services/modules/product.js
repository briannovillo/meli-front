import Api from '../Api';

const productConfig = {
  host: 'https://xcemt4j6ui.execute-api.us-east-1.amazonaws.com',
  productGetEndpoint: '/prd/api/items/',
  productSearchEndpoint: '/prd/api/items/',
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
};

class ProductApi extends Api {
  get(id) {
    console.log(id);
    if (!id) {
      throw new Error('Parameter id cannot be empty');
    }
    const url = `${productConfig.host}${productConfig.productGetEndpoint}${id}`;
    const options = {
      method: 'GET',
      headers: { 'User-Agent': productConfig.userAgent }
    };
    return this.call(url, options);
  }

  search(query) {
    if (!query) {
      throw new Error('Parameter q cannot be empty');
    }
    const url = `${productConfig.host}${productConfig.productSearchEndpoint}?q=${query}`;
    const options = {
      method: 'GET',
      headers: { 'User-Agent': productConfig.userAgent }
    };
    return this.call(url, options);
  }
}

export default new ProductApi();
