export const postData = (type, userData) => {
  let baseUrl = "http://localhost:8080/";

  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
