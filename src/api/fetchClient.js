/* eslint-disable semi */
class fetchClient {
  static get(baseUrl, endpoint, queryParams, token, headers) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint + queryParams, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          ...headers,
        },
      })
        .then(response => {
          if (response.status === 401) {
            // handle for unauthorized
          }
          if (!response.ok) {
            response
              .json()
              .then(error => {
                reject(error);
              })
              .catch(err => {
                console.log(err);
                reject('Unknown error occurred');
              });
          }
          resolve(response.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  static post(baseUrl, endpoint, payload, token, headers) {
    return new Promise((resolve, reject) => {
      console.log(`${baseUrl}${endpoint} request-> ${JSON.stringify(payload)}`);
      fetch(baseUrl + endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          ...headers,
        },
      })
        .then(response => {
          if (response.status === 401) {
            // handle for unauthorized
          }
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  static put(baseUrl, endpoint, payload, token, headers) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          ...headers,
        },
      })
        .then(response => {
          if (response.status === 401) {
            // handle for unauthorized
          }
          if (!response.ok) {
            response
              .json()
              .then(error => {
                reject(error);
              })
              .catch(err => {
                console.log(err);
                reject('Unknown error occurred');
              });
          }
          resolve(response.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  static patch(baseUrl, endpoint, payload, token, headers) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          ...headers,
        },
      })
        .then(response => {
          if (response.status === 401) {
            // handle for unauthorized
          }
          if (!response.ok) {
            response
              .json()
              .then(error => {
                reject(error);
              })
              .catch(err => {
                console.log(err);
                reject('Unknown error occurred');
              });
          }
          resolve(response.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  static delete(baseUrl, endpoint, payload, token, headers) {
    return new Promise((resolve, reject) => {
      const url = baseUrl + endpoint;
      console.log(`${url} request-> ${JSON.stringify(payload)}`);
      fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          ...headers,
        },
      })
        .then(response => {
          if (response.status === 401) {
            // handle for unauthorized
          }
          if (!response.ok) {
            response
              .json()
              .then(error => {
                reject(error);
              })
              .catch(err => {
                console.log(err);
                reject('Unknown error occurred');
              });
          }
          resolve(response.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}

export default fetchClient;
