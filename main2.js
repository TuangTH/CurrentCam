window['ann'] = [{
  'at': 100,
  'msg': 'cool'
}, {
  'at': 230,
  'msg': 'coolianno'
}];

// select video element
var vid = document.getElementById("v0");
//var vid = $('#v0')[0]; // jquery option

var currentFrame = $('#currentFrame');
var num;
var video = VideoFrame({
  id: 'v0',
  frameRate: 30,
  callback: function(frame) {
    // currentFrame.html(frame);
    // }
    ann.forEach(function(ele) {
      if (frame == ele['at']) {
        currentFrame.html(ele['msg']);
      }
    });
  }
});

// pause video on load
vid.pause();

$('#play-pause').click(function() {
  ChangeButtonText();
});

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function() {
  vid.pause();
};

// refresh video frames on interval for smoother playback
setInterval(function() {
  TweenMax.to(vid, 2, {
    currentTime: window.pageYOffset / 400
  });
}, 40);

function ChangeButtonText() {
  if (video.video.paused) {
    video.video.play();
    video.listen('frame');
    $("#play-pause").html('Pause');
  } else {
    video.video.pause();
    video.stopListen();
    $("#play-pause").html('Play');
  }
}
