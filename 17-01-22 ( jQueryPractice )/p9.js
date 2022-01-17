$(document).ready(function () {
  $("#btn1").click(function () {
    $("#addp").before("<p>Before Paragraph</p>");
  });
  $("#btn2").click(function () {
    $("#addp").after("<p>After Paragraph</p>");
  });
});
