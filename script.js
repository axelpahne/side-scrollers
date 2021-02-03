// Create all global variable
let character = char();
let canvas = createCanvas();
let ctx = canvas.getContext("2d");
let positon = 0;


//Create all images
const teslaSprite = new Image();
teslaSprite.src = './images/sprite-liggande.png';
const background = new Image();
background.src = './images/galaxy.jpg';
const moon = new Image();
moon.src = './images/moon.png';


//Start program (Paint Canvas)
animate();


// Event Listener (Listens for keys pressed)
document.addEventListener("keydown", event => {

    console.log(event.key)

    moveCharacter(event)

});


//Functions

/**
 *@Description Create character / hero
 */

function char() {

    let character = {

        height: 32,
        jumping: true,

        //Position of char
        x: 10,
        y: 700,
        //Size of character
        width: 300,
        height: 170,
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
    let myCanvas = document.createElement('canvas');

    //Append Elements
    document.body.insertAdjacentElement('beforeend', myCanvas);

    //Canvas size
    myCanvas.width = 1300;
    myCanvas.height = 934.5;

    return myCanvas
}


/**
 *@Description Animate / paint canvas
 */

function animate() {
    //Clears Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //Draws Canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    console.log(positon);

    positon++;
    //Draw moons

    ctx.drawImage(moon, 1100 - positon, 0, 300, 300);
    ctx.drawImage(moon, 1000 - positon, 600, 400, 400);
    ctx.drawImage(moon, 600 - positon, 300, 250, 250);
    ctx.drawImage(moon, 500 - positon, 700, 200, 200);

    ctx.drawImage(moon, 2100 - positon, 0, 300, 300);
    ctx.drawImage(moon, 2000 - positon, 600, 400, 400);
    ctx.drawImage(moon, 1600 - positon, 300, 250, 250);
    ctx.drawImage(moon, 1500 - positon, 700, 200, 200);

    //Calls function that draw character
    drawCharacter(teslaSprite, character.width * character.frameX, character.height * character.frameY, character.width, character.height, character.x, character.y, character.width, character.height)

    //Loops function
    requestAnimationFrame(animate);
}



/**
 *@Description Draw character
 */

function drawCharacter(img, sX, sY, sW, sH, dX, dY, dW, dH) {

    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

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
    //Changes iamge from sprite sheet
    character.frameX = 3;

}

/**
 *@Description Go Left
 */

function goLeft() {

    //Makes character move up
    character.x -= character.speed;
    //Changes iamge from sprite sheet
    character.frameX = 3;
}






// Back-up Code (Not in use).................


function createBackground() {

    let background = document.createElement('img');

    //Set images attributes
    background.src = "./images/galaxy.jpg";

    return background
}


function createCharacter() {

    let character = document.createElement('img');

    //Set images attributes
    character.src = "./images/rymdtesla600px.png";

    let imgWidth = character.height / 10;
    let imgHeight = character.width / 10;

    // Set character size
    character.height = imgWidth;
    character.width = imgHeight;

    return character
}


function startProgram() {

    let canvas = createCanvas();
    let character = createCharacter();
    canvas.id = 'myChar';

    //Get Canvas Content
    let ctx = canvas.getContext("2d");

    //Draw on Canvas when char is loaded
    character.onload = function () {
        ctx.drawImage(character, 15, 115, character.width, character.height);
    }

}


function drawOnCanvas(direction) {

    let canvas = document.getElementById('myChar');
    let character = createCharacter();

    //Get Canvas Content
    let ctx = canvas.getContext("2d");

    //Clears Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log(direction)

    //Draw on Canvas when char is loaded

    character.onload = function () {
        ctx.drawImage(character, direction.x, direction.y, character.width, character.height);
    }
}