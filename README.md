# ReadME - Project Intructution
Portfolio Project 2 – User SureDeveloping – Code Institute

## Contents 
[Contens](#contens) \
[User Experience (UX)](#user-experience)\
[Traget audiencce of the website](#traget-audiencce-of-the-website)
[User Story](#user-story)\
[Design](#design) \
[Color Scheme](#color-scheme) \
[Typography](#typography) \
[Imagery](#imagery) \
[Wireframe](#wireframe) \
[Features](#features) \
[Accessibility](#accessibility) \
[Technologies Used](#technologies-used) \
[Software and frameworks Used](#software-and-frameworks-used) \
[Languages Used](#languages-used) \
[Deployment](#deployment) \
[Testing](#testing) \
[Manual Testing](#manual-testing) \
[Chrom Developer Tools](#chrom-developer-tools) \
[Slack peer groupe rewiew](#slack-peer-groupe-rewiew) \
[Validator tests](#validator-tests) \
[Solved Bugs](#solved-bugs) \
[Known unsolved Bugs](#known-unsolved-bugs) \
[Credits](#credits) \
[Code Used](#code-used) \
[Content on the website](#content-on-the-website) \
[Learning Materials](#learning-materials) \
[Acknowledgments](#acknowledgments)

## User Experience (UX)
### Traget audiencce of the website
- People who like browser games
- People who want to learn about the countries and their flags
- People who want to pass some free time

### User Story

As a first time user of the website, you want to:
- play a bug-free game.
- play a self-explanatory game.
- be able to navigate the site intuitively.
- know the rules of the game.
- find a Highscoure display on the site.
- have a resolution of the question displayed.
- be able to use the site from different end devices.
- be able to use the website from any device.
- lern which country has which flag.

As a frequent user of the website, you want to:
- repeat the game experience.
- improve and learn more about the countries and their flags.

Objectives of the website operator is to:
- provide an easy to navigate website. 
- provide an entertaining diversion to pass the time.
- provide a way to learn about different countries and their flags.
- provide accessibility for screen readers through aria labels.

How this requirements are met:
- The game will be free to play.
- Aria labels, alt text and semantic elements will be used.
- Sans-serif font are used.
- All important elements can be found on the main page without having to navigate a lot.
- There is always the possibility to cancel the game.
- There is a link to the rules of the game.

## Design
### Color Scheme

I used the website https://coolors.co/ to find Colors that go together. They should be bright and friendly.

![](assets/images/readme/color1.png "Color palette1") 

Finally, I checked the contrast again with the page https://contrast-grid.eightshapes.com/

![](assets/images/readme/color2.png "Color palette2")

### Typography

The fonts come from Googlefonds and were used for the following fonts:
- Rampart One is used for the main Headline "The flag Quiz". It is a sans-serif font.
- Lexend is used for all other text on the site. It is a sans-serif font.

### Imagery

Images used are from the site https://www.freepik.com/.
Main Image is Designed by Ibrandify / Freepik
The other Images are Designed by Allexxandar / Freepik

### Wireframe

Here are the Wireframes:
Wireframe for the start page:

![](assets/images/readme/wireframe-start.png "Wireframe from Start page") 

Wireframe for rules page:

![](assets/images/readme/wireframe-rules.png "Wireframe from Rules page") 

Wireframe for game page:

![](assets/images/readme/wireframe-game.png "Wireframe from Game page") 

### Features

The website is a Flag Quiz. Visitors can test their knowledge of countries and their flags. There are 3 main pages. The landing page provides an overview of all the content on the site for the visitor. The second page is the "How to play" page, which explains the rules.  The third page is the game page where the quiz is played.

- Landing Page:
There is a heading at the top of the landing page. The Flag Quiz.  Below it is a picture of the flags of the world. Followed by two buttons. The first opens a Page which is showing the rules of the game and the second starts the game. There is visual feedback when the mouse is moved over the button. 

- How to Play Page:
Open is an overview of how to play on the website. Below is the text with the rules.
Below this text are two clickable buttons. The first takes you back to the main page. A click on the second button will start the game.

- Game Page:
At the top of the game page is the scoreboard. It shows how many correct questions the player has answered. Below this, the graphic of a landing position is displayed. Followed by the question. Which country does this flag belong to? This is followed by the possible answers and two further buttons. Next Question and Quit. Quit always takes the user directly back to the landing page. With Next question he can skip a question or open the next question after he has answered a question. If the player has clicked on the button with the correct answer. This is indicated by changing the color of the button. If he has clicked an incorrect answer, the color of the button also changes. The wrong answer turns red, the correct answer yellow.

### Accessibility

To ensure Accessibility the following things were done:
- I used semantic HTML
-### I used descriptive alt attributes for images
-### I provided information for screen readers
- I used good color contrast and a tested color palette

## Technologies Used

### Languages Used

HTML, CSS and Java Script were used for this project.

### Software Used

Balsamiq - To create a wireframe
Gitpod - To code the website
Git - For version control
Github - To store and deploy the website
Google Fonts - All fonts used are from google fonts
Font Awesome - All icons used are from Font Awesome
gauger.io/fonticon - To create a favicon 
Google Dev Tools, and Lighthouse - For troubleshooting testing and fixing bugs
Deepl - For translating text
Birme To change the image to webp format
Am I Responsive? To check if the page is responsive

## Deployment

The project was codes with gipod and then deployed on Github. That is how the deployment was done:
- I loged in at GitHub and navtigate to the repo of the project
- I clicked on Settings and navigated to "Github pages"
- There I seted the source of Deploy from a branch and set the branch from none to main and clicked save.
- Then this link was deployed automatically: https://suredeveloping.github.io/flag-quiz/

## Testing

The page was tested on different ways and different errors came to light.

### Manual Testing

I tested all the links and the Form. This was done during the hole prozess. This was done repeatedly throughout the project. A detailed description of the bugs can be found in solved and unsolved bugs.

### Chrom Developer Tools

- I used Def-tolls to check if the side is working on different screen sizes.
- I used Lighthouse to test my webside. 

This opimisation I did afterwards:
- I comprimised the pictures.
- Image of the Lighthouse test result: 

## Screenshots der TESTS!!!

### Slack peer groupe rewiew

I have submitted my project but have not received any feedback yet.

### Validator tests

HTML

Css

JS

### Screenshots der TESTS!!!

### Solved Bugs
- After I clicked the start quiz button the games.html opened but the questions and answers were not loaded. I had the assumption that it is the browser that has to load the page first before it can load the functions for the flag and for the answers. So I first tried to solve this problem with setTimeout() and with a callback function. Waiting for the DOM was not successful either. Solution was to call the function in the JS below and use the button only to open the games.html. Previously I had called the function with the button. The Start Quiz function then started the game.htlm and the function for the flags and answers. 
- I had a problem that the correct answers were not displayed as correct. This had to do with the position of the if method that increments the flag number. The incrementing may only take place when an answer has been submitted by the player. If the incrementing is done earlier, the check answer function picks up the wrong values from the flags array. 
- I had in the index.html values for the height and the width when img are not allowed. This was the result of a W3validator check. Therefore these were changed. 
- I had an empty src value in the img placeholder on the game.html page. This was also a result of the W3validator check. The value was therefore set to 0. 
- I had an error in the console. I only had one JS file. Therefore, when opening the index.html an image was already tried to be loaded which is only visible on the game html page. This has caused an error. With the help of the tutor team I was able to fix the error by creating a separate JS file for each html file. 
- I had an error in the console. A favicon could not be loaded. I recreated the icon and replaced the icon file. 

### Known unsolved Bugs

## Credits

### Code Used
- I used the Asterisk wildcard selector from the Love running project.
- I used the fonts from my Boradgame Bar Bonn project
- ## I love maths PP2 - code institute ????

### Content on the website

The content of this project was written by Stephan Sure. 

### Learning Materials

- All content from Online Course in Full Stack Software Developmen especially videos about Portfolio Project 2 and ReadME from Code Instituet
- Video about the Profolio project 2 https://www.youtube.com/watch?v=40vLxYUJiQY&list=PL_7334VduOHvzZYlgy_0kZLcic2NINCUt&index=6
- https://www.youtube.com/watch?v=U9VF-4euyRo&t=831s - video about css and clamp function
- https://www.youtube.com/watch?v=eHPLTDOAggc - to lern how to make the buttons work
- https://www.youtube.com/watch?v=riDzcEQbX6k - How to bulid a quizz with java script
- https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF  - How to bulid a quizz with java script
- https://www.youtube.com/watch?v=PBcqGxrr9g8 - How to bulid a quizz with java script
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout - Timeout function
- https://www.w3schools.com/jsref/event_onclick.asp  - to lern how to make the buttons work
- https://www.youtube.com/watch?v=xVMkFJZhZYU&t=283s - to lern how to make the buttons work
- https://werner-zenk.de/javascript/html-button_ueber_javascript_eine_funktion_zuweisen.php - to lern how to make the buttons work
- https://www.youtube.com/watch?v=P6UgYq3J3Qs - to learn more about position absolut and relative
- https://www.youtube.com/shorts/9cSL5dP4rgM - to learn more about position absolut and relative
- https://stackoverflow.com/
- https://www.w3schools.com/css/
- geekforgeeks
- W3Schools

### Acknowledgments

I like to Thank the follow person for the help during the project:
- My Code Institute Mentor Spencer Barriball
- The Tutor Support team at Code Institute
- Kristyna my Cohort Facilitator for advice and mental support

** This project is for educational use only and was created for the Code Institute course Full stack software development by Stephan Sure **



