// Ely Knowles, CSC102, Assignment 7.2, 29APR2026
// this is the function that runs the palidrome checker
function strings()
{
    // grabs the user input when submitBtn clicked
    var string1 = document.getElementById("initString").value;
    
    // this if statement checks for no character entry or only white space entry before continuing the palindrome checker
    // trim removes white space from the beginning and end. === means after trimming beginning/end white space, does the string
    // exactly equal an empty string
    if (string1.trim() === "")
    {
        // if the user does not enter alpha characters or only spaces, display this message:
        document.getElementById("resultString").innerHTML = "MUST ENTER A COMBINATION OF CHARACTERS USING A-Z";
        return; // return stops the function if no characters or only spaces were entered by the user
    }
    
    // makes user input case-insensitive evaluating as if all lowercase and ignores spaces in user input
    // .replace(/\s/g,"") replaces a string with something else. \s = any white space character, / / = pattern, g = global or all occurences in the string, "" = replace white space with nothing
    string1 = string1.toLowerCase().replace(/\s/g,"");
    
    // this reverses string 1 for the if else statements
    var revStr = string1.split("").reverse().join("");
    
    // checks whether or not the palindrome revStr does not equal string 1
    if (revStr != string1)
    {
        document.getElementById("resultString").innerHTML = "Try Again, this is not a Palindrome";
    }
   
    // if the if statement is not true then it is a palidrome
    else
    {
        document.getElementById("resultString").innerHTML = "This is a Palindrome";
    }
}

// Nav button functions below this line to make nav buttons operational, "../" = go up one folder
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
function boardsPage()
{
    location.replace("../Boards/boards.html");
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