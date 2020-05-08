$(function () {

// select video element
// var vid = document.getElementById("v0");
var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function() {
  vid.pause();
  $("#time").text(vid.currentTime); // **AN issue here: time does not show up
};

//--refresh video frames on interval for smoother playback--//

// Version 1 using TweenMax -- still lacking --
// setInterval(function() {
  // TweenMax.to(vid, 2, {
  //   currentTime: window.pageYOffset / 400
  // });
// }, 40);


// Version 2 using window.pageYOffset -- still lacking but slightly better --
setInterval(function() {
  if((window.pageYOffset / 400) > 3 && (window.pageYOffset / 400) < 6){
      vid.pause();
  } else {

      vid.currentTime = window.pageYOffset / 400;
  }
}, 32);

//--- Text Object in JSON format ---//

// window['ann'] = [{
//   'at': 100,
//   'msg': 'cool'
// }, {
//   'at': 230,
//   'msg': 'coolianno'
// }];

//--- For Grabing frame and show text from obejct set above ---//
// NOT WORKING YET

// var currentFrame = $('#currentFrame');
// var num;
// var video = VideoFrame({
//   id: 'v0',
//   frameRate: 30,
//   callback: function(frame) {
//     // currentFrame.html(frame);
//     // }
//     ann.forEach(function(ele) {
//       if (frame == ele['at']) {
//         currentFrame.html(ele['msg']);
//       }
//     });
//   }
// });
});
