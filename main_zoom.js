$(document).ready(function() {
  // var div = $("#secTitle");
  // var pos = div.position();
  $(window).scroll(function() {
    // console.log("img left: " + $(".img-area img").position().left);
    var scrollMax = $(document).height() - $(window).height();
    console.log("scrollTop: " + $(window).scrollTop());
    var scroll = $(window).scrollTop();
    // $(".img-area img").css({
    //   width: (100 + scroll / 5) + "%"
    // })
    if ($(window).scrollTop() > 5 && $(window).scrollTop() <= scrollMax / 3) {
      console.log("max scroll: " + scrollMax);
      // if ($(".img-area img").position().left < 100) {
      $(".main-text #title").css({
        opacity: 100
      });
      $(".main-text #first").css({
        opacity: 100
      });
      $(".img-area img").css({
        width: (100 + scroll / 2) + "%"
      });

    } else if ($(window).scrollTop() > scrollMax / 3 && $(window).scrollTop() <= (scrollMax - (scrollMax / 3))) {
      console.log("spot 2");
      $(".main-text #title").css({
        opacity: 0
      });
      $(".main-text #first").css({
        opacity: 50 - (scroll / 10)
      });
      $(".secTitle #second").css({
        opacity: 100
      });
      $(".img-area img").clearQueue().animate({
        left: 80 + "%"
      });

    } else if ($(window).scrollTop() > (scrollMax - (scrollMax / 3)) && $(window).scrollTop() <= scrollMax) {
      $(".img-area img").clearQueue().animate({
        left: 20 + "%"
      });
      $(".secTitle #second").css({
        opacity: 50 - (scroll / 10)
      });
      $(".thdTitle #third").css({
        opacity: 100
      });
    } else {
      $(".img-area img").css({
        width: 100 + "%"
      });
      $(".img-area img").clearQueue().animate({
        left: 50 + "%"
      });
      $(".secTitle #second").css({
        opacity: 0
      });
      $(".thdTitle #third").css({
        opacity: 0
      });
      $(".main-text #first").css({
        opacity: 0
      });
      $(".main-text #title").css({
        opacity: 0
      });
    }
  });
});


// console.log("img left: " + $(".img-area img").position().left);

// $(".img-area img").clearQueue().animate({
//   left: 50 + "%"
// });
