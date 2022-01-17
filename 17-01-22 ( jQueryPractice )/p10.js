$(document).ready(function () {
  $("#del").click(function () {
    $("#li2").empty(); //Removes the child elements from the selected element
    $("#li1").remove(); //Removes the selected element (and its child elements)
    $("span").remove("#st,.sp"); // removes all <span> elements with id="st" and class="sp"
  });
});
