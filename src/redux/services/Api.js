import fetch from 'node-fetch';

class Api {
  call(url, options) {
    let success = false;
    return fetch(url, options)
      .then(response => {
        success = response.ok;
        return response.json();
      })
      .then(data => {
        if (!success) {
          throw new Error(`${data.code} ${data.error}`);
        }
        return data;
      });
  }
}

export default Api;
