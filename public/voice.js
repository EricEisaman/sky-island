window.voices = window.speechSynthesis.getVoices();

window.announceNewPlayer = function(name) {
  var msg = new SpeechSynthesisUtterance(`${name} has joined the game!`);
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == window.config.voice.name; })[0];
  msg.pitch = window.config.voice.pitch;
  msg.rate = window.config.voice.rate;
  speechSynthesis.speak(msg);
}

window.printVoices = ()=>{
  speechSynthesis.getVoices().forEach(v=>{
    console.log(v.name,v.lang);
  });
}