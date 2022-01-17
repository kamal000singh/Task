$(document).ready(function () {
  $("#h").html("Hide");
  $("#s").html("Show");
  $("#t").html("Hide/Show");
  $("#h").click(function () {
    $("#test").hide(1000);
  });
  $("#s").click(function () {
    $("#test").show(1000);
  });
  $("#t").click(function () {
    $("#test").toggle(1000);
  });
});
