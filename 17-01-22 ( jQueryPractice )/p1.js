$(document).ready(function () {
  $("p").click(function () {
    // $('#demo').html() == "Hello World" ? $('#demo').html('Hello Kamal') : $('#demo').html('Hello World')
    $("#test").html($(this).html());
    // $(this).hide();
  });
});
