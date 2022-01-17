$(document).ready(function () {
  //   $("span").parent().css({ border: "2px solid red", padding: "20px" });
  //   $("li").parents().css({ border: "2px solid red", padding: "20px" });
  $("span")
    .parentsUntil("div")
    .css({ border: "2px solid red", padding: "20px" });
});
