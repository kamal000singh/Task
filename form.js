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

//submitData() function execute when submit button clicked
document.getElementById("submit").onclick = function submitData() {
  //diplay table after clicked on submit button
  document.getElementById("table").style.display = "block";

  //get name value by id from text input field
  document.getElementById("dname").innerHTML =
    document.getElementById("name").value;

  //get email value by id from email input field
  document.getElementById("demail").innerHTML =
    document.getElementById("email").value;

  //get contact value by id from number input field
  document.getElementById("dcontact").innerHTML =
    document.getElementById("contact").value;

  //get dob value by id from date input field
  document.getElementById("ddob").innerHTML =
    document.getElementById("dob").value;

  //get gender value by id from radio input field
  document.getElementById("dgender").innerHTML = gender();

  //get hq value by id from option select field
  document.getElementById("dhq").innerHTML =
    document.getElementById("hq").value;

  //get resume value by id from file input field
  document.getElementById("dresume").innerHTML =
    document.getElementById("resume").value;
};
