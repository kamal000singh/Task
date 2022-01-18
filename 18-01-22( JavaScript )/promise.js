const fname = new Promise((resolve, reject) => {
  let i = 14;
  if (i < 5) {
    resolve(i);
  } else {
    reject("Error found");
  }
});

fname.then(
  (response) => {
    console.log(response);
    document.getElementById("test").innerHTML = "Resolved Value : " + response;
  },
  (err) => {
    console.log("Failed to resolve " + err);
    document.getElementById("test").innerHTML = "Rejected Value : " + err;
  }
);
