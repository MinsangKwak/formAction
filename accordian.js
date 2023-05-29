$(document).ready(function () {
  let accordians = $(".accordian");

  // 눌렀을 때 형제관계의 메뉴가 닫히도록
  $(".accordian p").click(function () {
    const currentDropDown = $(this).parent(".accordian");
    const isOpen = currentDropDown.hasClass("isOpen");
    accordians.removeClass("isOpen");

    if (!isOpen) {
      currentDropDown.addClass("isOpen");
    }
  });

  // 눌렀을 때 닫히지 않도록
  // $(".accordian p").click(function () {
  //   const currentDropDown = $(this).parent(".accordian");
  //   currentDropDown.toggleClass("isOpen"); // 눌렀을 때 닫히지 않도록
  // });
});
