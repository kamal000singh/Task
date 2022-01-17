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
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
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
    str += `<tr key =${index}><td>${item.fname}</td><td>${item.lname}</td><td>${item.email}</td><td>${item.contact}</td><td>${item.dob}</td>
                  <td>${item.gender}</td><td>${item.hq}</td><td><button onclick="editData(${index})">Edit</button></td>
                  <td><button onclick="deleteData(${index})">Delete</button></td></tr>`;
  });
  console.log(str);
  document.getElementById("dtable").innerHTML = str;
}

//function used for delete perticular element in array
function deleteData(index) {
  document.getElementById("edittable").style.display = "none";
  let temp = [];
  for (let i = 0; i < detail.length; i++) {
    if (i != index) {
      temp.push(detail[i]);
    }
  }
  detail = temp;
  displayData();
}

//editData function used for edit existing info
function editData(index) {
  document.getElementById("edittable").style.display = "block";
  document.getElementById("index").value = index;
  document.getElementById("efname").value = detail[index].fname;
  document.getElementById("elname").value = detail[index].lname;
  document.getElementById("eemail").value = detail[index].email;
  document.getElementById("econtact").value = detail[index].contact;
  document.getElementById("edob").value = detail[index].dob;
  document.getElementById("egender").value = detail[index].gender;
  document.getElementById("ehq").value = detail[index].hq;
}

//this is used to update changes
document.getElementById("updateData").onclick = function () {
  let i = document.getElementById("index").value;
  detail[i].fname = document.getElementById("efname").value;
  detail[i].lname = document.getElementById("elname").value;
  detail[i].email = document.getElementById("eemail").value;
  detail[i].contact = document.getElementById("econtact").value;
  detail[i].dob = document.getElementById("edob").value;
  detail[i].gender = document.getElementById("egender").value;
  detail[i].hq = document.getElementById("ehq").value;

  displayData();

  document.getElementById("edittable").style.display = "none";
};
