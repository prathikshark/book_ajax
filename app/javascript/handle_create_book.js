console.log("TEST");

$(document).ready(function () {
  $("#submit_btn").on("click", function (e) {
    e.preventDefault();

    book_data = {
      book: {
        title: $("#title").val(),
        description: $("#description").val(),
      },
    };

    console.log(book_data);
    $.ajax({
      url: "http://localhost:3000/books",
      method: "POST",
      data: book_data,
      dataType: "html",
      success: function (result) {
        console.log(result);
        $("#allbooks").append(result);
      },
    });
  });
});
