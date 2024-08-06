# Dragon Slayer

![Responsive](screenshots/responsive.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Existing Features](#existing-features)
- [Features Left to Implement](#features-left-to-implement)
- [Testing](#testing)
- [Validator Testing](#validator-testing)
- [Deployment](#deployment)
- [Credits](#credits)


## Overview
Dragon Fighter is a turn-based battle game between a player and a dragon. The player uses a dice to determine the damage dealt to the dragon, and the dragon retaliates in turn. The game ends when either the player or the dragon's health drops to zero.


## Features 



### Existing Features
- __Play Button__

  - Placed in the center of the opening page this feature will start the game, taking the user to the main game page and also starting the inititate the audio for the website.
![Play](screenshots/playgamebutton.png)

- __Game Message__

  - On the main page the user is met with a text explaining how to start the game.
  
    ![Game Message1](screenshots/gamemessage1.png)

- __Buttons__

  - Both buttons are placed center/bottom of the screen for the user to interact with. The attack button initiates the dice roll and the mute button toggles the audio on and off.

    ![Buttons](screenshots/buttons.png)

- __Health__

  - Text showing the current users health which updates as the game progresses.

    ![User Health](screenshots/userhealth.png)

  - Text showing the current the dragons health which updates as the game progresses.

    ![Dragon Health](screenshots/dragonhealth.png)


- __Game Message After Attack__

  - Once the user clicks the "Attack!" button. The game message shakes in the center of the page showing how much damage they did to the dragon. Within a short delay a follow up message shows above, stating how much damage the dragon did back"

    ![Game Message2](screenshots/gamemessage2.png)

- __End of Game__

  - If the user managed to win by getting the dragons health to zero before their health reaches zero they will be met with a victory message.

    ![Victory](screenshots/victory.png)

  - If the dragon beats the user they will be met with a defeat message.

    ![Defeat](screenshots/defeat.png)

- __Reset__

  - Once the game has finished, a reset button will appear at the bottom of the screen. If they wish to play again they can press this to reset back to default main menu to start again.

    ![Reset](screenshots/reset.png)



### Features Left to Implement

- I would like to add an audio file of a sword swing sound when the user hits attack.
- Additional animation to the victory and defeat message.


## Testing 

| Test Case | Description | Steps | Expected Result | Actual Result | Status |
|-----------|-------------|-------|-----------------|---------------|--------|
| 1 | Initial game state | 1. Load the game <br> 2. Check health values | Player and Dragon both have 100 health | Player and Dragon both have 100 health | Pass |
| 2 | Player attack | 1. Click "Attack" button <br> 2. Observe player damage to dragon | Dragon health decreases by 1-10 | Dragon health decreases by correct amount | Pass |
| 3 | Dragon retaliates | 1. Click "Attack" button <br> 2. Observe dragon damage to player | Player health decreases by 1-10 | Player health decreases by correct amount | Pass |
| 4 | Game reset | 1. Play the game until one health drops to 0 <br> 2. Click "Reset" button | Both Player and Dragon health reset to 100 | Both Player and Dragon health reset to 100 | Pass |
| 5 | Mute background music | 1. Click "Mute" button <br> 2. Observe background music | Background music stops | Background music stops | Pass |
| 6 | Unmute background music | 1. Click "Mute" button again <br> 2. Observe background music | Background music resumes | Background music resumes | Pass |
| 7 | Responsive design | 1. Resize the browser window <br> 2. Observe layout | Layout adjusts to fit screen size | Layout adjusts correctly | Pass |



### Validator Testing 
- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 14 functions in this file.
      - Function with the largest signature takes 1 arguments, while the median is 0.
      - Largest function has 19 statements in it, while the median is 4.5.
      - The most complex function has a cyclomatic complexity value of 3 while the median is 1.
- Lighthouse

    ![Lighthouse](screenshots/lighthouse.png)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://niallpierce.github.io/Dragon-Slayer/


## Credits 


### Content 



### Media






