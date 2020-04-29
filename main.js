$(window).scroll(function(){
  console.log("test");
  var scroll = $(window).scrollTop();
  $(".img-area img").css({
    width: (100 + scroll / 5) + "%"
  })
})
