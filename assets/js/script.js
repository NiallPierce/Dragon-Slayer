let backgroundMusic = new Audio('assets/audio/background-music.mp3');
backgroundMusic.loop = true;
let isMuted = false;
let hasPlayedOnce = false;

document.addEventListener('DOMContentLoaded', function () {
    // Hides the game container and show the play button
    const gameContainer = document.querySelector('.game-container');
    const messageContainer = document.querySelector('.message-container');
    const playerMessage = document.getElementById('gameMessagePlayer');
    const dragonMessage = document.getElementById('gameMessageDragon');

    //Hides game elements until play is pressed
    gameContainer.style.display = 'none';
    messageContainer.style.display = 'none';
    playerMessage.style.display = 'none';
    dragonMessage.style.display = 'none';

    // Play Game symbol 
    const playButton = document.createElement('button');
    playButton.id = 'playButton';
    playButton.innerHTML = 'PLAY GAME'; 
    document.body.prepend(playButton);

    // Play music on button click
    playButton.addEventListener('click', function playOnUserInteraction() {
        if (!hasPlayedOnce) {
            backgroundMusic.play().then(() => {
                hasPlayedOnce = true;
                console.log('Music started playing');
                playButton.style.display = 'none'; // Hide the button after successful play
                gameContainer.style.display = 'block'; // Show the game container

                setTimeout(() => gameContainer.classList.add('show'), 10);

            }).catch(error => {
                console.log('Play failed:', error);
            });
        }
    });
    // Set up mute button
    const muteButton = document.getElementById('muteButton');
    if (muteButton) {
        muteButton.addEventListener('click', toggleMute);
    } else {
        console.error('Mute button not found in the DOM');
    }

    // Set up game buttons
    document.getElementById('attackButton').addEventListener('click', playerAttack);
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

function toggleMute() {
    if (isMuted) {
        backgroundMusic.play().catch(error => console.log('Play failed:', error));
        document.getElementById('muteButton').textContent = 'Mute';
    } else {
        backgroundMusic.pause();
        document.getElementById('muteButton').textContent = 'Unmute';
    }
    isMuted = !isMuted;
}