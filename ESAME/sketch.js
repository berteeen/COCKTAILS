var currentSound;

function playSound(sound) {
  var audio = document.getElementById(sound);
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  audio.play();
  currentSound = audio;
}

document.addEventListener('click', function(event) {
    // verifichiamo se l'elemento cliccato non è un'immagine
    if (!event.target.matches('#grid img')) {
        // interrompiamo la riproduzione di tutti i suoni
        var sounds = document.getElementsByTagName('audio');
        for (var i = 0; i < sounds.length; i++) {
            sounds[i].pause();
            sounds[i].currentTime = 0;
        }
    }
});

