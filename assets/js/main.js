
// header actions
function showbar(){
    document.querySelector(".menu").classList.toggle("dnone");
}


var video = document.querySelector('.video')

// When the 'ended' event fires
video.addEventListener('ended', function(){
  // Reset the video to 0
  video.currentTime = 0;
  // And play again
  video.play();
});