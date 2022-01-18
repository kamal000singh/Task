async function myFunc(i) {
  const newPromise = new Promise(function (resolve) {
    if (i == 0) {
      resolve("Kamal Singh Rawat");
    } else {
      resolve("Error found");
    }
  });
  document.getElementById("test").innerHTML = await newPromise;
}
myFunc(0);
