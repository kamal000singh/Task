let detail = [];

//gender function is used for get the value from radio button
function gender() {
  let res = document.getElementsByName("gender");
  for (let i = 0; i < res.length; i++) {
    if (res[i].checked) {
      res = res[i].value;
    }
  }
  return res;
}

//function execute when submit button clicked
document.getElementById("submit").onclick = function () {
  //insert object into array
  detail.push({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    dob: document.getElementById("dob").value,
    gender: gender(),
    hq: document.getElementById("hq").value,
  });

  //call display function;
  displayData();
};

//function used to display data in the table
function displayData() {
  let str = "";
  detail.map((item, index) => {
    str += `<tr key =${index}><td>${item.name}</td><td>${item.email}</td><td>${item.contact}</td><td>${item.dob}</td>
                  <td>${item.gender}</td><td>${item.hq}</td><td><button onclick="editData(${index})">Edit</button></td>
                  <td><button onclick="deleteData(${index})">Delete</button></td></tr>`;
  });
  console.log(str);
  document.getElementById("dtable").innerHTML = str;
}

//function used for delete perticular element in array
function deleteData(index) {
  let temp = [];
  for (let i = 0; i < detail.length; i++) {
    if (i != index) {
      temp.push(detail[i]);
    }
  }
  detail = temp;
  displayData();
}
function editData(index) {}
