$(document).ready(function () {
  $("p").mouseenter(function () {
    $("#test").html($(this).html());
  });
  $("span").mouseleave(function () {
    $("#test").html("Bye Bye " + $(this).html());
  });
});
