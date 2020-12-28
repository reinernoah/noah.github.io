var Count = 0
setTimeout(function(){
  document.getElementById("loading").play();
}, 4200);

setTimeout(function(){
  var image = document.getElementById("black");
  image.src = "Glitch.gif";
}, 4100);

//disable my mute
function disbleMute() {
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

function more() {
    var video = document.getElementById('movies');
    video.play();
}

// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    $("#button1").click(function() {
        stopVid();
    	playVid();
    	var video = document.getElementById('content');
    	setTimeout(function(){
    		if (Count == 0){
    		video.src = "Stranger.mp4";
    		Count = Count + 1;
    		}
    		else if (Count == 1){
    		video.src = "Banjo.mp4";
    		Count = Count + 1;
            email();
            resume();
	    more();
    		}
    		else if (Count == 2){
    		video.src = "Jerry.mp4";
    		Count = Count + 1;
    		}
    		else if (Count == 3){
    		video.src = "OJ.mp4";
    		Count = 0;
    		}
    	}, 750);
    	disbleMute();
    });
    $("#button2").click(function() {
        stopVid();
        playVid();
    	var video = document.getElementById('content');
    	setTimeout(function(){
    		if (Count == 0){
    		video.src = "Stranger.mp4";
    		Count = Count + 1;
    		}
    		else if (Count == 1){
    		video.src = "Kla.mp4";
    		Count = Count + 1;
            email();
            resume();
	    more();
    		}
    		else if (Count == 2){
    		video.src = "Sergio.mp4";
    		Count = Count + 1;
    		}
    		else if (Count == 3){
    		video.src = "OJ.mp4";
    		Count = 0;
    		}
    	}, 750);
    	disbleMute()
	});
});

