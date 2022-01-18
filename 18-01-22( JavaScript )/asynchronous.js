const myFunction = () => {
  setTimeout(() => {
    document.getElementById("test").innerHTML = "Hello Kamal Singh";
  }, 5000);
  document.getElementById("test").innerHTML = "Hello World";
};
myFunction();
