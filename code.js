var Count = 0;



setTimeout(function() {
  var image = document.getElementById("black");
  image.src = "Glitch.gif";
}, 0);

// Disable mute
function disableMute() {
  var video = document.getElementById('content');
  video.muted = false;
}

function playVid() {
  var vid = document.getElementById('control');
  vid.play();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

setTimeout(function() {
    document.getElementById("loading").play();
}, 3900);

function playMobileGif() {
  var isMobile = isMobileDevice();
  if (isMobile) {
    var gif = new Image();
    gif.src = "Loading1.gif";
    document.body.appendChild(gif);
  }
}

function stopVid() {
  var media = document.getElementById('loading');
  media.pause();
  media.currentTime = -750;
}

function email() {
  var video = document.getElementById('gmail');
  video.play();
}

function resume() {
  var video = document.getElementById('resume');
  video.play();
}



// Function to adjust video size on window resize
function adjustVideoSize() {
  var video = document.getElementById('video');
  var container = document.getElementsByClassName('container')[0];
  var containerWidth = container.offsetWidth;

  // Adjust the video width relative to the container width
  var videoWidth = containerWidth * 0.32; // Adjust the percentage as needed
  video.style.width = videoWidth + 'px';
}

window.addEventListener('resize', adjustVideoSize);



// Create a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// Allow the click of a button to prompt the user to create a new grid
$(document).ready(function() {
  $("#button1").click(function() {
    stopVid();
    playVid();
    var video = document.getElementById('content');
    setTimeout(function() {
      if (Count == 0) {
        video.src = "Reel.mp4";
        Count = Count + 1;
      } else if (Count == 1) {
        video.src = "Stranger.mp4";
        Count = Count + 1;
        email();
        resume();
      } else if (Count == 2) {
        video.src = "Jerry.mp4";
        Count = Count + 1;
      } else if (Count == 3) {
        video.src = "Banjo.mp4";
        Count = 0;
      }
    }, 750);
    disableMute();
  });

  $("#button2").click(function() {
    stopVid();
    playVid();
    var video = document.getElementById('content');
    setTimeout(function() {
      if (Count == 0) {
        video.src = "Reel.mp4";
        Count = Count + 1;
      } else if (Count == 1) {
        video.src = "Kla.mp4";
        Count = Count + 1;
        email();
        resume();
      } else if (Count == 2) {
        video.src = "Sergio.mp4";
        Count = Count + 1;
      } 
    }, 750);
    disableMute();
  });
});
