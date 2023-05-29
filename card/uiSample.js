$(document).ready(function () {
  var descriptionElement = $(".description");
  var resultElement = $(".data-attr-result");

  $('[data-attr="btnSampleCopy"]').click(function () {
    if (!descriptionElement.hasClass("isActive")) {
      var value = descriptionElement.data("value");
      descriptionElement.addClass("isActive");
      resultElement.text(value).addClass("isActive");

      setTimeout(function () {
        resultElement.removeClass("isActive");
      }, 3000);
    }
  });
});
