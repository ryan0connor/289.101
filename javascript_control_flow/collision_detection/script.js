/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

function logCoordinates() {
    console.log('x=' + puck_x + ' y=' + puck_y);
}

function checkCollision() {
    // collision detection code goes here
    if (puck_x >= 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
        console.log('collision!');
        document.getElementById('gap').style.backgroundColor = "red";
    }
    
    else {
        document.getElementById('gap').style.backgroundColor = "white";
    }
    
    if (puck_x <= 10){
        console.log('teleport');
        puck_x = 599;
    }
    
    else if (puck_x >= 590){
        console.log('teleport');
        puck_x = 1;
    }
    
    else if (puck_y <= 1){
        console.log('teleport');
        puck_y = 400;
    }
    
    else if (puck_y <= 400){
        console.log('teleport');
        puck_y = 1;
    }
    
}



//left button
document.getElementById('left').addEventListener('click', function() {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

//right button
document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

//up button
document.getElementById('up').addEventListener('click', function() {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
});

//down button
document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
});




