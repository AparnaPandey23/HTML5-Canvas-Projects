var canvas = document.querySelector('canvas'); 
//console.log(canvas);
//changing the width and height of canvas to fit entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d'); 
/* 2d is context type representing a two dimentional rendering context (x,y)
it could also be webgl - 3 dimentional rendering */


// // -------MAKING A RECTANGLE-------
// context.fillStyle = 'rgba(255,0,0,0.5)'; //changes color all elements below it
// context.fillRect(100,100,100,100);
// context.fillRect(200,200,100,200);
// context.fillStyle = 'rgba(0,255,0,0.5)';
// context.fillRect(300,100,300,100);
// context.fillStyle = 'rgba(0,0,255,0.5)';
// context.fillRect(400,400,300,100);
// //(x,y) numbers are relative to top left corner (0,0) and next 2 represent width and height 

// //------- MAKING A LINE  -------
// context.beginPath(); //initializes
// context.moveTo(500, 300);  //moves to start point P1
// context.lineTo(300, 500); // ending point P2
// context.strokeStyle = "green";
// context.stroke(); //draw the line b/w P1 and P2

// context.beginPath(); //initializes
// context.moveTo(600, 400);  //moves to start point P1
// context.lineTo(600, 200); //  point P2

// context.lineTo(200, 400); // point p3
// context.strokeStyle = "red"; //changes color of line
// context.stroke(); //draw the line b/w P1 , P2 and then to


// // -------MAKING AN ARC OR A CIRCLE -------
// //context.arc(x: number, y: number, radius: number, startAngle: radians at what angle do want to start drawing our arc , endAngle: how long would we want the arc to go on for (semi circle, full circle etc), anticlockwise?: boolean()): void)

// context.beginPath();
// context.arc(500,500,30,0, Math.PI *2, false); //Math.pi *2  will give full circle
// context.strokeStyle = 'brown';
// context.stroke(); //draws a line from last path to the circle we dont want that so we need to add begin path before the path

// //adding more elements at same location just makes border thicker.
// for(var i =0; i < 10; i++)
// {  
//     context.beginPath();
//     context.arc(200,200,20,0, Math.PI *2 , false); //location (200,200) for each 10 circles.
//     context.strokeStyle = "grey";
//     context.fillStyle = "darkgrey"; //used to set color to be filled
//     context.fill(); //fills the set color in
//     context.stroke();
// }

// //adding at different locations
// for(var i =0; i < 10; i++)
// {   context.beginPath(); 
//     var x = (Math.random()* window.innerWidth); //adds circles within boundries
//     var y = (Math.random()* window.innerHeight);
//     context.beginPath();
//     context.arc(x,y,20,0, Math.PI *2 , false);
//     context.strokeStyle = "black";
//     context.stroke();
// }




//call function named Animate to animate the drawings made on canvas.

// var x = 200;
// var y = 300; 
// function animate(){
//     requestAnimationFrame(animate); //calls the same funtion again. this creates a loop.
//     // console.log('Hey'); // to check if the function is being called 
//     context.beginPath();
//     context.arc(x,y,30,0, Math.PI* 2, false);
//     context.fillStyle = "coral";
//     context.fill();
//     context.strokeStyle = "red";
//     context.stroke();
//     x = x+1;
//      //console.log(x);
// }
// animate();


var x = Math.random() *innerWidth;
//speed of animation left/right
dx = (Math.random() -0.5)*8;  //x velocity

var y = Math.random() *innerHeight; 
//speed of animation up/down
dy = (Math.random() -0.5)*8; //y velocity

var radius  = 30; 

function animate(){
    requestAnimationFrame(animate); //calls the same funtion again. this creates a loop.

    // *** TRY TO COMMENT ABOVE STATEMENT AND SEE PATTERN
    //before calling an arc clear the canvas using the following statement
    context.clearRect(0,0 , innerWidth,innerHeight);// clears the entire canvas

    // console.log('Hey'); // to check if the function is being called 
    context.beginPath();
    context.arc(x,y,radius,0, Math.PI* 2, false);
    context.fillStyle = "coral";
    context.fill();
    context.strokeStyle = "red";
    context.stroke();
    
    if(x+ radius > innerWidth || x- radius < 0)  //if x tries to leave the canvas change direction of animation or x velocity
    {   dx  = -dx;   //makes the circle bounce off from right
    }

    if(y+ radius > innerHeight || y- radius < 0)  //if x tries to leave the canvas change direction of animation or x velocity
    {   dy  = -dy;   //makes the circle bounce off from right
    }
     //x = x+1 ; here speed of animation dx = 1  is same as below
     x = x + dx;
     y = y+ dy;
     //console.log(x);
}
animate();

