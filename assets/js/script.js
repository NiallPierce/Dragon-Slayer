//Audio file
let backgroundMusic = new Audio('assets/audio/background-music.mp3');
backgroundMusic.loop = true;
let isMuted = false;
let hasPlayedOnce = false;

      // Play music on button click
      playButton.addEventListener('click', function playOnUserInteraction() {
        if (!hasPlayedOnce) {
            backgroundMusic.play().then(() => {
                hasPlayedOnce = true;
                console.log('Music started playing');
                playButton.style.display = 'none'; // Hides the button after successful play
                gameContainer.style.display = 'block'; // Shows the game container

                setTimeout(() => gameContainer.classList.add('show'), 10);

            }).catch(error => {
                console.log('Play failed:', error);
            });
        }
    });