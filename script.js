// Create all global variable
let character = char();
let canvas = createCanvas();
let ctx = canvas.getContext("2d");
let positon = 0;
let counter = 0;
let moonObject = [];
let myAnimation = true;
let gameScore = 0;
let score;

// when was the last object spawned
let lastSpawn = -1;

// spawn a new object every 1500ms
let spawnRate = 1500;



//Create all images
const teslaSprite = new Image();
teslaSprite.src = './images/sprite-liggande.png';
const background = new Image();
background.src = './images/galaxy.jpg';
const moon = new Image();
moon.src = './images/moon.png';
const boomImg = new Image();
boomImg.src = './images/boom.jpg';


//Start program (Paint Canvas)



// Setup the animation

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

    // console.log(myAnimation)

    detectCollision()

    score = (Math.trunc(gameScore / 10))

    if (myAnimation == true && score <= 50) {
        //Clears Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //Draws Canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        //Draw score board
        gameScore++;

        ctx.font = '48px serif';
        ctx.fillStyle = "white";
        ctx.fillText(score, 10, 50);

        // Get Time
        var time = Date.now();

        // See if its time to spawn a new object
        if (time > (lastSpawn + spawnRate)) {
            lastSpawn = time;
            randomMoon();
        }

        //Calls function that draw character
        drawCharacter(teslaSprite, character.width * character.frameX, character.height * character.frameY, character.width, character.height, character.x, character.y, character.width, character.height)

        //Draw moons
        //Loop through list of arrays
        for (let i = 0; i < moonObject.length; i++) {

            let object = moonObject[i];
            object.x -= 4;

            ctx.drawImage(moon, object.x, object.y, object.width, object.height);

        }


        //Loops function
        requestAnimationFrame(animate);

    } else {

        console.log('nooo')

        gameOver()
    }

}


/**
 *@Description Game over
 */

function gameOver() {

    ctx.drawImage(boomImg, character.x + 270, character.y + 50, 70, 70);


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

            myAnimation = false;

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

    // Set y and x position
    let y = getRandomIntInclusive(0, canvas.height);
    let x = getRandomIntInclusive(canvas.width - 100, canvas.width);

    // Set moon position
    let width = getRandomIntInclusive(0, 500);
    let height = width;

    // Create moon object
    let moon = {
        x: x,
        y: y,
        width: width,
        height: height
    }

    console.log(moon)

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