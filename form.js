function gender() {
  let res = document.getElementsByName("gender");
  for (let i = 0; i < res.length; i++) {
    if (res[i].checked) {
      res = res[i].value;
    }
  }
  return res;
}

document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";
  document.getElementById("dname").innerHTML =
    document.getElementById("name").value;

  document.getElementById("demail").innerHTML =
    document.getElementById("email").value;

  document.getElementById("dcontact").innerHTML =
    document.getElementById("contact").value;

  document.getElementById("ddob").innerHTML =
    document.getElementById("dob").value;

  document.getElementById("dgender").innerHTML = gender();

  document.getElementById("dhq").innerHTML =
    document.getElementById("hq").value;
  document.getElementById("dresume").innerHTML =
    document.getElementById("resume").value;
};
