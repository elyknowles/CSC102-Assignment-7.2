// Ely Knowles, CSC102, Assignment 7.2, 29APR2026

// global variables to specify starting points and change increments
var intervalidID =0;
startTop = 100;
startLeft = 100;
var change = 100;
var dLeft = 5;
var dTop = 5;

// this function starts the interval movement when the start button is clicked and assigns an internal id to be called in follow on functions
function startInterval()
{
    var imageChuck = document.getElementById("imgChuck");
    // shows the image when start button is clicked
    imageChuck.style.display = "block";
    // centers the image horizontally dividing both the window and image width
    startLeft = (window.innerWidth / 2) - (imageChuck.width / 2);
    // centers the image vertically dividing both the window and image height
    startTop = (window.innerHeight / 2) - (imageChuck.height / 2);
    // this forces a movement ever 100ms
    intervalidID = setInterval(moveIT, 100);
}

// this function controls the movement once started relative to global var definitions
function moveIT()
{
    // tells the js to grab imgChuck and move it by 5 px from top & left starting positionn
    var imageChuck = document.getElementById("imgChuck");
    imageChuck.style.top = startTop + "px";
    imageChuck.style.left = startLeft + "px";
    change +=5;
    // this if statement causes the image to change direction when the sides of the users browser window are detected
    if ((startLeft +imageChuck.width >= window.innerWidth) || (startLeft <=0)) //add + #of px's between width and > to force direction change sooner
        {dLeft= -dLeft;
        }
    //  this if statement causes the image to change direstion when the top or bottom of the users browser window is detected 
    // <=200 && dTop forces image to change direction at 200 px from the top ONLY. The bottom limit is still the bottom edge of the window 
    if ((startTop + imageChuck.height >= window.innerHeight && dTop > 0) || (startTop <=200 && dTop <0))
        {dTop = -dTop;}
        startTop += dTop;
        startLeft += dLeft;
}

// this function stops the interval movement and resets position to 0
function stopInterval()
{
    clearInterval(intervalidID);
    // this hides chuck when stop button is clicked
    document.getElementById("imgChuck").style.display = "none";
}

// nav button onclick functions below this line. makes nav operational, "../" = go up one folder
function homePage()
{
    location.replace("../index.html");
}
function gamePage()
{
    location.replace("../Game/game.html");
}
function boardsPage()
{
    location.replace("../Boards/boards.html");
}
function palPage()
{
    location.replace("../Palindrome/pal.html");
}
function shopPage()
{
    location.replace("../Shopping/shopping.html");
}
function soundPage()
{
    location.replace("../Sound/sound.html");
}
function tablePage()
{
    location.replace("../Tables/table.html");
}