var Count = 0;

setTimeout(function() {
  document.getElementById("loading").play();
}, 4200);

setTimeout(function() {
  var image = document.getElementById("black");
  image.src = "Glitch.gif";
}, 4100);

// Disable mute
function disableMute() {
  var video = document.getElementById('content');
  video.muted = false;
}

function playVid() {
  var vid = document.getElementById('control');
  vid.play();
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

// Function to play the loading video
function playLoadingVideo() {
  setTimeout(function() {
    var loadingVideo = document.getElementById("loading");
    loadingVideo.play();
  }, 4200);
}

$(document).ready(function() {
  // Check if the device is a mobile device
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  // Function to play the video immediately on mobile
  function playMobileVideo() {
    var isMobile = isMobileDevice();
    if (isMobile) {
      var video = document.getElementById('content');
      video.src = "Reel.mp4";
      video.play();
    }
  }

  // Call the playMobileVideo function on document ready
  playMobileVideo();
  email();
});
  




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


$(document).ready(function() {
  $("#button1").click(function() {
    // Remove the mobile div on Button 2 click
    if (window.innerWidth <= 767) {
      $("#mobile-div").remove();
    }

$(document).ready(function() {
  $("#button2").click(function() {
    // Remove the mobile div on Button 2 click
    if (window.innerWidth <= 767) {
      $("#mobile-div").remove();
    }
    
// Create a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// Allow the click of a button to prompt the user to create a new grid
$(document).ready(function() {
  $("#button1").click(function() {
    stopVid();
    playVid();
    var video = document.getElementById('content');
    setTimeout(function() {
      if (Count == 0) {
        video.src = "Stranger.mp4";
        Count = Count + 1;
      } else if (Count == 1) {
        video.src = "Banjo.mp4";
        Count = Count + 1;
        email();
        resume();
      } else if (Count == 2) {
        video.src = "Jerry.mp4";
        Count = Count + 1;
      } else if (Count == 3) {
        video.src = "OJ.mp4";
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
        video.src = "strange.mp4";
        Count = Count + 1;
      } else if (Count == 1) {
        video.src = "Kla.mp4";
        Count = Count + 1;
        email();
        resume();
      } else if (Count == 2) {
        video.src = "Sergio.mp4";
        Count = Count + 1;
      } else if (Count == 3) {
        video.src = "OJ.mp4";
        Count = 0;
      }
    }, 750);
    disableMute();
  });
});
