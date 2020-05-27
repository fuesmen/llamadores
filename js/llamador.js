var myvid = document.getElementById('myvideo');
var myvids = [
  "./vid/01.mp4",
  "./vid/covid-19.mp4",  
  "./vid/02.mp4",
  "./vid/covid-19.mp4",    
  "./vid/03.mp4",
  "./vid/covid-19.mp4",    
  "./vid/04.mp4",
  "./vid/covid-19.mp4",    
  "./vid/05.mp4",
  "./vid/covid-19.mp4",    
  "./vid/06.mp4",
  "./vid/covid-19.mp4",    
  "./vid/07.mp4",
  "./vid/covid-19.mp4",    
  "./vid/08.mp4",
  "./vid/covid-19.mp4",    
  "./vid/09.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});
