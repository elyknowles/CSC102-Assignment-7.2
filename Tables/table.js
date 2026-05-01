// Ely Knowles, CSC 102, Assignment 7.2, 30APR2026
// this function makes the submit form and button operational
function addRow()
{
    var when = document.getElementById("date").value; //calls the user selected date when button clicked
    var service = document.getElementById("service").value;//calls the user input for service type
    var milage = document.getElementById("mileNum").value;//calls the user input for current vehicle miles

    var table = document.getElementById("apriliaMaint");//calls the table to place these values
    
    var newRow = table.insertRow(-1); //insert a row at the end of the table (-1 means at the end)

    var cell1 = newRow.insertCell(0);//goes in column 1
    var cell2 = newRow.insertCell(1);//goes in column 2
    var cell3 = newRow.insertCell(2);//goes in column 3
    //adds user input to the specified cell
    cell1.innerHTML = service;
    cell2.innerHTML = when;
    cell3.innerHTML = milage;

    //clears the input fields after adding row
    document.getElementById("date").value = "";
    document.getElementById("service").value = "";
    document.getElementById("mileNum").value = "";
}

// functions below this line make nav buttons operational, "../" = go up one folder
function homePage()
{
    location.replace("../index.html");
}
function gamePage()
{
    location.replace("../Game/game.html");
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
function boardsPage()
{
    location.replace("../Boards/boards.html");
}