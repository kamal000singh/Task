$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").load("demo.txt", function (response, status, err) {
      if (status == "success") {
        alert("Success!");
      } else {
        alert("Error! : " + err);
      }
    });
  });
});
