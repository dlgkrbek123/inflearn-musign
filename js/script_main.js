// 마우스 오버, 포커스시 밑줄

$(function () {
  $(".gnb li a").on("mouseenter focus", function () {
    var bar = $(this).position().left;
    var widNum = $(this).width();

    $("span.bar").css({
      left: bar + "px",
      width: widNum + "px",
      opacity: 1,
    });
  });

  $(".gnb li a").on("mouseleave", function () {
    $("span.bar").css({
      left: 0 + "px",
      width: 0 + "px",
      opacity: 0,
    });
  });
});
