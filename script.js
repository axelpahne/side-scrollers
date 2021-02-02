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


function gameArea() {
    let myGameArea = document.createElement("canvas");
    context = myGameArea.getContext('2d');
    document.body.insertAdjacentElement('afterbegin', myGameArea);
    myGamePiece = new Image();
    myGamePiece.src = "./images/rymdtesla100px.png";
    myGamePiece.onload = function() {
        context.drawImage(myGamePiece, 0, 50);
    };
}


function moveup() {
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
}



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