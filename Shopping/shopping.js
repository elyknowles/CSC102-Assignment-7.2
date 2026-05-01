// Ely Knowles, CSC102, Assignment 7.2, 28APR2026
var arrayOfNames = []; // global variable that  is empty by default

// this function allows the user to display the list if it gets hidden
function showArray()
{
    var allItems ="";
    var i;
    // this if statement looks for user inputs. if exactly equal to empty (no inputs) the display in the list item "shopping list is currently empty"
    if (arrayOfNames.length === 0)
    {
        allItems = "<li class='emptyList'>Shopping list is currently empty</li>";
    }
    // otherwise display what the input that the user submitted with onclick
    else
    {
        for (i =0; i < arrayOfNames.length; i++)
        {
            allItems += "<li class='listItem'>" + arrayOfNames[i] + "</li>"; //adds a bulleted item to the list at the specified onclick location
        }
    }
    document.getElementById("result").innerHTML = allItems; //updates the list
}

function addFront()
{
    document.getElementById("formAdd").hidden = false;//displays submit button and entry field when add to top is clicked
    document.getElementById("addItem").value = ""; //clears the input box when submit is clicked
}

function addBack()
{
    document.getElementById("formAddBack").hidden = false; //displays submit button and entry field when add to bottom is clicked
    document.getElementById("addItemBack").value = ""; // clears the input box when submit is clicked
}

function remFront()
{
    arrayOfNames.shift(); // removes item from top of list
    showArray(); // shows updated list
}

function remBack()
{
    arrayOfNames.pop(); // removes item from bottom of list
    showArray(); // shows updated list
}

function findItem()
{
    var userInput = document.getElementById("searchName").value;
    // checks for empty user input
    if (userInput.trim() === "")
    {
        document.getElementById("result").innerHTML = "Please enter a name"; //if empty input, displays this message in the list
        return;
    }
    var found = arrayOfNames.includes(userInput); // USE user input ONLY
    if (!found)
    {   
        document.getElementById("result").innerHTML = userInput + " NOT in the list"; //if not found display this message in the list
    }
    else
    {
        document.getElementById("result").innerHTML = userInput + " IS in the list"; // otherwise display this message in the list 
    }
    document.getElementById("formSearch").hidden = true; // hides the form after search
}
function showSearch()
{
    document.getElementById("formSearch").hidden = false;//displays the search input field
    document.getElementById("searchName").value = ""; // clears input field on click 
}

function addSpecific()//creates input field for add to top
{
    var item = document.getElementById("addItem").value;
    arrayOfNames.unshift(item);
    document.getElementById("formAdd").hidden = true; //this makes the entry field and submit button disapper when submit is clicked
    showArray();//updates list so user doesn't have to click show shopping list again
}

function addSpecificBack()//creates input field for add to bottom
{
    var item = document.getElementById("addItemBack").value;
    arrayOfNames.push(item);
    document.getElementById("formAddBack").hidden = true;//hides submit button and field after click
    showArray();//updates list so user doesn't have to click show shopping list again
}

// nav button functions below this line to make nav buttons operational "../"= go up one folder
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
function boardsPage()
{
    location.replace("../Boards/boards.html");
}
function soundPage()
{
    location.replace("../Sound/sound.html");
}
function tablePage()
{
    location.replace("../Tables/table.html");
}