$(document).ready(function () {
  $("p").on({
    mouseenter: function () {
      $("#test").html($(this).html());
    },
    mouseleave: function () {
      $("#test").html("Bye " + $(this).html());
    },
  });
});
