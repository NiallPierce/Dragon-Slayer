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

// User and Dragons Health
let playerHealth = 100;
let dragonHealth = 100;
let isGameOver = false;

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

//Animation reset after each click of attack
function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; 
    element.style.animation = null;
}

function playerAttack() {
    let playerDamage = rollDice(10);
    dragonHealth -= playerDamage;
    updateHealth();
    
    const playerMessage = document.getElementById('gameMessagePlayer');
    resetAnimation(playerMessage);
    playerMessage.style.display = 'block';
    gameMessage.style.display = 'none';
    playerMessage.textContent = `You attacked the dragon and did ${playerDamage} damage!`;
    
    if (checkWin()) return;

    setTimeout(dragonAttack, 1000);
}

function dragonAttack() {
    let dragonDamage = rollDice(10);
    playerHealth -= dragonDamage;
    updateHealth();
    
    const dragonMessage = document.getElementById('gameMessageDragon');
    resetAnimation(dragonMessage);
    dragonMessage.style.display = 'block';
    dragonMessage.textContent = `The dragon attacked and did ${dragonDamage} damage!`;
    
    checkWin();
}

function updateHealth() {
    document.getElementById('userHealth').textContent = `Your Health: ${playerHealth}`;
    document.getElementById('dragonHealth').textContent = `Dragon's Health: ${dragonHealth}`;
}

function checkWin() {
    const playerMessage = document.getElementById('gameMessagePlayer');
    const dragonMessage = document.getElementById('gameMessageDragon');
    
    if (dragonHealth <= 0) {
        playerMessage.textContent = "You defeated the dragon! Victory!";
        dragonMessage.style.display = 'none';
        document.getElementById('attackButton').disabled = true;
        document.getElementById('resetButton').style.display = 'inline-block';
        return true;
    } else if (playerHealth <= 0) {
        playerMessage.style.display = 'none';
        dragonMessage.textContent = "The dragon defeated you. Game Over.";
        document.getElementById('attackButton').disabled = true;
        document.getElementById('resetButton').style.display = 'inline-block';
        return true;
    }
    return false;
}
