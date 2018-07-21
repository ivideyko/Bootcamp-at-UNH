$(function() {

  $(".change-eaten").on("click", function(event) {
    const id = $(this).data("id");
    const newEatenState = { eaten: true };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(() => location.reload());
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    if ($("#burger").val().trim() == "") return false;
    const newBurger = { 
      type: $("#burger").val().trim(),
      eaten: false
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => location.reload());
  });
  
});
