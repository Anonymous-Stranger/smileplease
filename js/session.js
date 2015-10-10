

var errorCallback = function(e) {
    alert('Reeeejected!');
    console.log(e);
};

if (Modernizr.getusermedia){
  var gUM = Modernizr.prefixed('getUserMedia', navigator);
  gUM({video: true, audio: true}, function(localMediaStream) {

    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);

    // // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // // See crbug.com/110938.
    // video.onloadedmetadata = function(e) {
    //     // Ready to go. Do some stuff.
    // };
  }, errorCallback);
} else {
  errorCallback("No.");
}