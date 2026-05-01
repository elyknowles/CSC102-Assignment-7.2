// Ely Knowles, CSC102, Assignment 7.2, 29APR2026
// this makes the form functional
function checkCreds()
{
    var first = document.getElementById("fName").value; //var to call first name
    var last = document.getElementById("lName").value; //var to call last name
    var zip = document.getElementById("zipCode").value; //var to call zip code

    var fullName = first + " " + last; //var to add first and last name together to creat var fullname to call

    if ((fullName.length >20) || (fullName.length <6)) //states if full name is more than 20 characters OR lest the 6 display invalid name message
    {
        document.getElementById("status").innerHTML= "Invalid Name - Try Again"; // writes the message on the page
    }
    // this checks the user input zipcode 5 digits only.
    else if (zip.length !== 5) // if the entry does not equal exactly 5 digits display this message
    {
        document.getElementById("status").innerHTML= "Invalid Zip Code";
    }
    else // otherwise display this message and go to home page
    {
        document.getElementById("status").innerHTML= "Welcome - Credentials Accepted";
        location.replace("index.html");
    }

}