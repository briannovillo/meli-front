import fetch from "isomorphic-fetch";
import "es6-promise";

class Api {
  call(url, options) {
    return fetch(url, options)
      .then(res => res.json())
      .catch(err => {
        throw new Error(`${err.code} ${err.message}`);
      });
  }
}

export default Api;
