$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").prepend("Prepend Paragraph ");
  });
  $("#btn2").click(function () {
    $("p").append(" Append Paragraph");
  });
  $("#btn3").click(function () {
    $("ol").prepend("<li>Prepend List</li>");
  });
  $("#btn4").click(function () {
    $("ol").append("<li>Append List</li>");
  });
});
