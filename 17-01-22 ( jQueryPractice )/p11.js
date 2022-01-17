$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").addClass("blue"); //Adds one or more classes to the selected elements
  });
  $("#btn2").click(function () {
    $("p").removeClass("blue"); //Removes one or more classes from the selected elements
  });
  $("#btn3").click(function () {
    $("p").toggleClass("blue"); //Toggles between adding/removing classes from the selected elements
  });
  $("#btn4").click(function () {
    $("p").css("display", "block"); //Sets or returns the style attribute
  });
  $("#btn5").click(function () {
    $("p").css("display", "none"); //Sets or returns the style attribute
  });
});
