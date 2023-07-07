var playBtn = document.querySelectorAll('.item'),
  hearbeat = document.getElementById('heartbeat')
  audios = document.querySelectorAll('audio');
console.log(audios);

let i=1;
for(i; i<= playBtn.length ; i++){
playBtn[i].addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn[i].addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);


	
}