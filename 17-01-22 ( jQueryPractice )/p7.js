let fn;
$(document).ready(function () {
  $("#btn").click(function () {
    fn = $("#fn").val();
    $("#dfn").css("display", "block").val(fn);
  });
});
