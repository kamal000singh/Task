let data = [
  { name: "Kamal Singh", Profile: "Full Stack developer" },
  { name: "Abhishek Gaur", Profile: "Java developer" },
];
const enrollData = (newData, callback) => {
  data.push(newData);
  callback();
};
const display = () => {
  let str = "";
  data.map((item) => {
    str += `<li>${item.name}</li>`;
  });
  setTimeout(() => {
    document.getElementById("test").innerHTML = str;
  }, 2000);
};
let newData = { name: "Nilesh Kumar", Profile: "Android developer" };
enrollData(newData, display);
