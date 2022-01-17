$(document).ready(function () {
  $("#btn").on({
    click: function () {
      $("#d1").html(
        $("#d1").html() == "Hello Kamal" ? "Hello World" : "Hello Kamal"
      );
    },
    mouseenter: function () {
      $("#btn").css({
        "background-color": "red",
        color: "white",
        "font-size": "20px",
      });
    },
    mouseleave: function () {
      $("#btn").css({
        "background-color": "white",
        color: "black",
        "font-size": "15px",
      });
    },
  });
});
