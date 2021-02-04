// Create all global variable

//Create menu
// createMenu()


let animationControl;
//Create character
let character = char();
//Create canvas
let canvas = createCanvas();
//Create scoreBoard elements
createElements('ScoreBoard')
//Gets canvas context
let ctx = canvas.getContext("2d");
//Create array that holds obsticle objects
let moonObject = [];
//Create let to control start and stop 
let runAnimation = true;
//Gets menu 
let menu = document.getElementById('myMenu');
//Gets menu button
let startBtn = document.getElementById('startBtn');
//Create gamescore tracker
let gameScore = 0;
// When was the last object spawned
let lastSpawn = -1;
// Spawn a new object every 1500ms
let spawnRate = 1500;
// Checks when to start score count
let scoreCountStar = false;
// Checks when to start score count
let winGameScore = 20000;


//Create all images

//Tesla sprite
const teslaSprite = new Image();
teslaSprite.src = './images/sprite-liggande.png';
//Galaxy (Background)
const background = new Image();
background.src = './images/galaxy.jpg';
//Moon
const moon = new Image();
moon.src = './images/moon.png';
const boomImg = new Image();
boomImg.src = './images/boom.png';
const winImg = new Image();
winImg.src = './images/win-02.png';
const spaceImg = new Image();
spaceImg.src = './images/spaceship.svg';
const spaceship = new Image();
spaceship.src = './images/spaceship.png';
const asteroid2 = new Image();
asteroid2.src = './images/asteroid2.png';
const astronaut = new Image();
astronaut.src = './images/astronaut.png';
const satellite = new Image();
satellite.src = './images/satellite.png';

const myGameOver = new Image();
myGameOver.src = './images/game-over.png';

// let arrayImg = [spaceImg, background, moon]
let arrayImg = [spaceship, asteroid2, astronaut, satellite, moon]


//Start program (Paint Canvas)
animate();

// Event Listener (Listens for keys pressed)
document.addEventListener("keydown", event => {
    // console.log(event.key)
    //Runs function to move character
    moveCharacter(event)
});


// Event Listener (Listens for keys pressed)
startBtn.addEventListener("click", event => {

    console.log('hej')
    startGame()

});

let curL = document.getElementById('curtain-left')
let curR = document.getElementById('curtain-right')


// Event Listener (Listens for click on curtain)
curL.addEventListener("click", event => {

    curL.remove();

});

// Event Listener (Listens for click on curtain)
curR.addEventListener("click", event => {

    curR.remove();

});


/**
 **************************************
 ************* @Functions *************
 **************************************
 */

/**
 *@Description Create character / hero
 */

function startGame() {

    scoreCountStar = true;

    // Starts animation loop
    requestAnimationFrame(animate)

    // Removes menu
    startBtn.style.display = 'none'

    // Star.....!!!!!!!!!!!!!!!!!!!!!!!
    runAnimation = true;

    // Sets hero to start position
    character = char();

    //Empty array
    moonObject = [];

    // Sets Game Score to Zer0
    gameScore = 0;

    //Control sounds
    myAudio = document.getElementById('myAudio')
    myAudio.src = "sounds/main.mp3"
    myAudio.play();
}

/**
 *@Description Game over
 */

function gameOver() {

    //Draws Boom Image
    ctx.drawImage(boomImg, character.x + 220, character.y - 40, 250, 250);

    ctx.drawImage(myGameOver, (canvas.width / 4) - 50, canvas.height / 3, 800, 300);


    //Removes play button
    startBtn.style.display = ''

    // Cancels animation loop
    cancelAnimationFrame(animationControl);

    //Plays sound
    myAudio = document.getElementById('myAudio')
    myAudio.src = "sounds/explosion.wav"
    myAudio.play();

}


/**
 *@Description Game over
 */

function winGame() {

    //Removes play button
    startBtn.style.display = ''

    //Draws image 
    ctx.drawImage(winImg, 400, 0, 500, 767);

    // Cancels animation loop
    cancelAnimationFrame(animationControl);

    //Plays sound
    myAudio = document.getElementById('myAudio')
    myAudio.src = "sounds/goal.wav"
    myAudio.play();
}



/**
 *@Description Create character / hero
 */

function char() {

    //Create object with properties
    let character = {

        //Position of char
        x: 10,
        y: 700,
        //Size of character
        width: 300,
        height: 150,
        //Sprite to display
        frameX: 0,
        frameY: 0,
        //Speed of every Key
        speed: 40,
        moving: false
    };

    return character
}

/**
 *@Description Create Canvas
 */

function createCanvas() {

    //Create canvas
    let section = document.createElement('section')
    let myCanvas = document.createElement('canvas');
    let header = document.createElement('header')
    let curtainLeft = document.createElement('em');
    let curtainRight = document.createElement('em');
    let headerImg = document.createElement('img');

    //Insert element to element
    section.insertAdjacentElement('beforeend', curtainLeft);
    section.insertAdjacentElement('beforeend', curtainRight);
    section.insertAdjacentElement('beforeend', myCanvas);
    header.insertAdjacentElement('beforeend', headerImg);
    // section.insertAdjacentElement('afterbegin', header);

    //Add element classes & Ids
    section.id = 'section'
    curtainLeft.id = 'curtain-left'
    curtainRight.id = 'curtain-right'
    header.id = 'header'
    headerImg.src = './images/musk.png'
    headerImg.height = '150';
    headerImg.width = '900';

    //Append Elements
    document.body.insertAdjacentElement('afterbegin', header);
    document.body.insertAdjacentElement('beforeend', section);

    //Canvas size
    myCanvas.width = 1300;
    myCanvas.height = 934.5;

    return myCanvas
}

/**
 *@Description Create Scoreboard
 */

function createElements(idValue) {

    //Get section
    let section = document.getElementById('section')


    //Declare variables
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let myAudio = document.createElement('audio')

    //Insert element to div / scoreboard
    div.insertAdjacentElement("afterbegin", button)
    div.insertAdjacentElement("afterbegin", span)
    div.insertAdjacentElement("afterbegin", h2)
    div.insertAdjacentElement("afterbegin", myAudio)

    //Set text to elements
    button.innerHTML = 'Play'

    //Add element classes & Ids
    div.id = 'my' + idValue
    span.id = 'myScore-' + idValue;
    button.id = 'startBtn';
    myAudio.id = 'myAudio'

    // // Write text
    h2.innerHTML = 'Score'

    //Insert element to body
    section.insertAdjacentElement("beforeend", div)
}

/**
 *@Description Create character / hero
 */

function createMenu() {

    createElements('Menu')
    let menu = document.getElementById('myMenu');
    let button1 = document.createElement('button')

    //Set id to elements
    button1.id = 'menuBtn';

    //Set text to elements
    button1.innerHTML = 'Start Game'
    menu.querySelector('span').innerHTML = "PLay"

    //Insert element to element
    menu.insertAdjacentElement("beforeend", button1)
}

/**
 *@Description Draw character
 */

function drawCharacter(img, sX, sY, sW, sH, dX, dY, dW, dH) {

    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}


/**
 *@Description Animate / paint canvas
 */

function animate() {

    console.log(runAnimation);

    //Calcualtes points 
    let score = (Math.trunc(gameScore / 10))

    //Get span elelmet from scoreboard
    let myScore = document.getElementById('myScore-ScoreBoard')

    //Sets span element to current score
    myScore.innerHTML = score

    // If on collison and score is less than valie then run...
    if (runAnimation == true && score <= winGameScore) {

        //Clears Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //Draws Canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        if (scoreCountStar == true) {
            //Draw score board
            gameScore++;
        }

        // Get Time
        var time = Date.now();

        // See if its time to spawn a new object
        if (time > (lastSpawn + spawnRate)) {
            lastSpawn = time;
            randomMoon();
        }

        //Calls function that draw character
        drawCharacter(teslaSprite, character.width * character.frameX, character.height * character.frameY, character.width, character.height, character.x, character.y, character.width, character.height)

        //Draw moons (Loop through array of objecte
        for (let i = 0; i < moonObject.length; i++) {

            let object = moonObject[i];
            object.x -= 4;
            ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        }

        //Detects Collison
        detectCollision()

        //Loops function
        animationControl = requestAnimationFrame(animate);

        // If collison

    } else if (runAnimation == false) {

        console.log('nooo')
        gameOver()

    } else if (score = winGameScore) {

        console.log('nooosss')
        winGame()
    }

}


/**
 *@Description Checks if Moon object overlaps with character
 */


function detectCollision() {

    // Loops thorugh array of moonObjects
    for (let i = 0; i < moonObject.length; i++) {

        obj1 = moonObject[i];

        // Compare object1 with object2

        if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, character.x, character.y, character.width, character.height)) {

            runAnimation = false;

            console.log('crash')
        }
    }
}


/**
 *@Description Checks if Moon object overlaps with character
 */

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {

    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
        return false;
    }

    return true;
}


/**
 *@Description Generates a random Moon Object
 */

function randomMoon() {

    // Set moon position
    let y = getRandomIntInclusive(0, canvas.height);
    let x = getRandomIntInclusive(canvas.width - 100, canvas.width);


    let index = getRandomIntInclusive(0, 4)

    arrayImg[index]

    // Set moon size
    let width = getRandomIntInclusive(150, 150);
    let height = width / 2;

    console.log(index)

    //Sets dimensions for specific indexs in array 
    if (index == 4 || index == 0 || index == 2) {

        width = getRandomIntInclusive(150, 150);
        height = width;
    }

    // Create moon object
    let moon = {
        x: x,
        y: y,
        width: width,
        height: height,
        img: arrayImg[index]
    }

    //Push moon to array
    moonObject.push(moon);
}

/**
 *@Description Calculates a random value 
 */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



/**
 *@Description Move character / hero based on key pressed
 */

function moveCharacter(event) {

    switch (event.key || event.code) {

        case "ArrowUp":
            if (character.y > 0) {
                goUp()
            }
            break

        case "ArrowDown":
            goDown();
            break


        case "ArrowLeft":
            goLeft();
            break


        case "ArrowRight":
            goRight();
            break

    }
}

/**
 *@Description Go up
 */

function goUp() {

    //Makes character move up
    character.y -= character.speed;
    //Changes iamge from sprite sheet
    character.frameX = 2;
}

/**
 *@Description Go Down
 */


function goDown() {

    //Makes character move up
    character.y += character.speed;
    //Changes iamge from sprite sheet
    character.frameX = 1;
}

/**
 *@Description Go Right
 */

function goRight() {

    //Makes character move up
    character.x += character.speed;
    //Changes image from sprite sheet
    character.frameX = 3;

}

/**
 *@Description Go Left
 */

function goLeft() {

    //Makes character move up
    character.x -= character.speed;
    //Changes image from sprite sheet
    character.frameX = 3;
}