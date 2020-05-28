//hard written JSON for testing here
// var contentObj = [{
//     'at': 8,
//     'msg': 'coo00000ooooool',
//     'title': 'title 2'
//   },
//   {
//     'at': 13,
//     'msg': 'cooliannooooooo',
//     'title': 'title 3'
//   }
// ]

//for loading external JSON
var contentObj = (function() {
  var contentObj = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': 'data/txt/contents.json',
    'dataType': "json",
    'success': function(data) {
      contentObj = data;
    }
  });
  return contentObj;
})();

if (window.console && window.console.log) {
  // console is available
  console.log("console is ready.");
}


//$(function () {
var vid = $('#v0')[0]; // jquery option
var videoStartTime = 0;
var durationTime = 0;
var timeDivider = 400,
  compareNum = 6;
var ptag = $('#one')[0]; //    var ptag = document.getElementById('one');
var htag = $('#title')[0];
var ptag2 = $('#two')[0];
var k;
var atMinute=0;
// pause video on load
vid.pause();

$(document).ready(function () {
    $('.info').on('click', '.firstpage', function (ev) {
      console.log("it's a click!");
      console.log(atMinute);
        // $(this).toggleClass('animate');
        $('.secondpage').toggleClass('animate');
    }).on('click', '#esc', function (ev) {
        $('.secondpage').toggleClass('animate');
        // $('.firstpage').toggleClass('animate');
    });
});

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function() {
  vid.pause();
  $("#time").text(vid.currentTime);
  durationTime = window.pageYOffset / timeDivider;
  $("#time1").text(durationTime);
  //An option for getting contentObj message at specific time ('at').
  //        if ((durationTime > contentObj[0].at) && (durationTime <= (contentObj[0].at)+1)){
  //          ptag.innerHTML = 'Observe the Change. I have changed.';
  //          ptag.innerHTML = contentObj[0].msg;
  //        }
  for (var k in contentObj) {
    // loop through every contentObj list
          // console.log(contentObj[k]);
    if (contentObj[k].hasOwnProperty('at')) {
      var min = contentObj[k].at
      // console.log(min);
      if ((min > durationTime) && (min <= durationTime + 1)) {
        // console.log("min: " + min);
        // console.log("message: " + contentObj[k].msg);
        atMinute = min;
        ptag.innerHTML = contentObj[k].msg;
        htag.innerHTML = contentObj[k].title;
        ptag2.innerHTML = contentObj[k].msg2;
      }
    }

  }
};

vid.addEventListener('timeupdate', function() {
  $("#time").text(vid.currentTime);
  if ((window.pageYOffset / timeDivider) >= compareNum && this.currentTime > (window.pageYOffset / timeDivider)) {
    this.pause();
    vid.currentTime = Math.round(window.pageYOffset / timeDivider);
    //vid.currentTime = (window.pageYOffset / timeDivider);
  } else if ((window.pageYOffset / timeDivider) > compareNum && this.currentTime < (window.pageYOffset / timeDivider)) {
    this.play();
  }
});


// Another option for refreshing video frames on interval for smoother playback
//    setInterval(function () {
//        if ((window.pageYOffset / timeDivider) > 3 && (window.pageYOffset / timeDivider) < 6) {
//            vid.pause();
//             alert("vid is paused.");
//        } else if ((window.pageYOffset / timeDivider) > 6 && (window.pageYOffset / timeDivider) < 7) {
//            vid.play();
//        } else if ((window.pageYOffset / timeDivider) >= 7 || (window.pageYOffset / timeDivider) < 3) {
//            vid.currentTime = window.pageYOffset / timeDivider;
//        }
//    }, 32);
//
//});

setInterval(function() {
  TweenMax.to(vid, 2, {
    currentTime: window.pageYOffset / timeDivider
  });
}, 40);

//});
