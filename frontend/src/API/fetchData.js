const FetchAPI = (url, method = "GET", body, headers) => {
  if (method.toUpperCase() === "GET") {
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log("Error in Fechdata => ", e));
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log("Error in POST Fechdata => ", e));
};

export default FetchAPI;
