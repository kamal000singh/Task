$(document).ready(function () {
  $("#h").html("FadeIn");
  $("#s").html("FadeOut");
  $("#t").html("FadeTo");
  $("#h").click(function () {
    $("#test").fadeIn("slow", function () {
      alert("Paragragh loaded");
    });
  });
  $("#s").click(function () {
    $("#test").fadeOut(1000, function () {
      alert("Paragragh is faded");
    });
  });
  $("#t").click(function () {
    $("#test").fadeTo(2000, 0.2);
    $("#test").fadeTo(2000, 1);
  });
});
