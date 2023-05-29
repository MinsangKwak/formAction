$(document).ready(function () {
  $("#buttonModalOpen").on("click", function () {
    console.log("눌림");
    $(".toastModal").addClass("show");
    $(".modal").addClass("slide-in-from-bottom");
  });

  $("#btnModalClose").on("click", function () {
    console.log("눌림 2");
    closeModal();
  });

  $(".toastModal").on("click", function (event) {
    if ($(event.target).hasClass("toastModal")) {
      closeModal();
    }
  });

  function closeModal() {
    $(".modal").removeClass("slide-in-from-bottom");
    $(".modal").addClass("slide-out-to-bottom");
    setTimeout(function () {
      $(".toastModal").removeClass("show");
      $(".modal").removeClass("slide-out-to-bottom");
    }, 500); // 500ms 지연 후에 모달이 사라집니다.
  }
});
