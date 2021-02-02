/**
 *@Description Create character / hero
 */


gameArea();
// character();


// document.addEventListener("keyup", function (evt) {


//     switch (evt.key) {

//         case "ArrowUp":

//             break

//         case "ArrowDown":

//             break


//         case "ArrowLeft":
//             break


//         case "ArrowRight":
//             break

//     }

// });

// function character() {​​​​​
//     let myCanvas = document.createElement('canvas');
//     let myImage = document.createElement('img');
//     myImage.src = "images/rymdtesla600px.png";
//     myCanvas.insertAdjacentElement('beforeend', myImage);
//     document.body.insertAdjacentElement('beforeend', myCanvas);
//     let ctx = myCanvas.getContext("2d");
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(0, 0, 150, 75);
// }​​​​​

//Create canvas-area where game will be played
function gameArea() {
    let myGameArea = document.createElement("canvas"); //create element "canvas" 
    context = myGameArea.getContext('2d'); //okänt vad det gör men verkar behövas
    document.body.insertAdjacentElement('afterbegin', myGameArea); //insert "canvas" to HTML
    myGamePiece = new Image(); //Create gamepiece (space tesla)
    myGamePiece.src = "./images/rymdtesla100px.png"; //Get the spacetesla img src
    myGamePiece.onload = function() { //onload function
        context.drawImage(myGamePiece, 0, 50, 10, 10); //drawimage(show img) on canvas (x-axis, y-axis, width, height)
    };
}

//Temporary button function
//Link to myGamePiece?
/*function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearMove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}*/



// /**
//  *@Description Neutral
//  */

// function neutral() {


// }


// /**
//  *@Description Up
//  */

// function up() {


// }


// /**
//  *@Description Down
//  */

// function down() {


// }
