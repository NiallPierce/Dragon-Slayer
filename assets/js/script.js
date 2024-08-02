let backgroundMusic = new Audio('assets/audio/background-music.mp3');
backgroundMusic.loop = true;
let isMuted = false;
let hasPlayedOnce = false;

document.addEventListener('DOMContentLoaded', function() {
    // Hides the game container and show the play button
      const gameContainer = document.querySelector('.game-container');
      gameContainer.style.display = 'none';
  
  
      const playButton = document.createElement('button');
      playButton.id = 'playButton';
      playButton.innerHTML = 'PLAY GAME'; // Play Game symbol 
      document.body.prepend(playButton);
});