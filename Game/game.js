// Ely Knowles, CSC102, Assignment 7.2, 28APR2026

function RPS()//this is the rock paper scissors game
{
    var player1 = Math.ceil(Math.random() *3); //generates a random number between 1 and 3 for player 1
    var player2 = Math.ceil(Math.random() *3); // generates a random number between 1 and 3 for player 2
    
    var rockImage ="rock.png";//assigns the id for rock
    var paperImage ="paper.jpeg";//assigns the id for paper
    var scissorsImage ="scissors.jpeg";//assigns the id for scissors
    
    document.getElementById("results").innerHTML = " ";//this updates the resuts per the following conditions

    if (player1 == 1)//if player 1 rolls 1 display rock
    {
        document.getElementById("player1Image").src =rockImage;
    }
    else if (player1 ==2)//if player 1 rolls 2 display paper
    {
        document.getElementById("player1Image").src =paperImage;

    }
    else//if player one doesnt roll 1 or 2 display scissors
    {
        document.getElementById("player1Image").src =scissorsImage;
    }


     if (player2 == 1)//if player 2 rolls 1 display rock
    {
        document.getElementById("player2Image").src =rockImage;
    }
    else if (player2 ==2)//if player 2 rolls 2 display paper
    {
        document.getElementById("player2Image").src =paperImage;

    }
    else//if player 2 doesn't roll 1 or 2 display scissors
    {
        document.getElementById("player2Image").src =scissorsImage;
    }

    if (player1 == player2)//if player 1 and player 2 roll the same number display "DRAW"
    {
        document.getElementById("results").innerHTML = "DRAW";
    }
    //The following are the conditions in which player 1 wins. "||" means "OR"
    else if ( (player1 ==1 && player2 ==2  ||  (player1 == 2 && player2 == 1)  || (player1 ==3 && player2 == 2) ))
    {
        document.getElementById("results").innerHTML = "PLAYER 1 WINS!!!";
    }
    else//states if any condition that does not result in a draw or player 1 winning then player 2 is the winner
    {
        document.getElementById("results").innerHTML = "PLAYER 2 IS THE WINNER!!!";
    }
}
// nav button functions below this line, "../" = go up one folder
function homePage()
{
    location.replace("../index.html");
}
function boardsPage()
{
    location.replace("../Boards/boards.html");
}
function memePage()
{
    location.replace("../Meme/meme.html");
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