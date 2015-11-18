//Using what you read, re-write your function from the Basic JavaScript workshop that returns the 
//first character of a string using CPS
//Use the newly created function to show that you understand the concept


//First character of a string using CPS

function firstString (name, ret) {
    ret(name[0])}

 
//calling the function with an example 
firstString("johnny", function(x) {
   console.log(x);
})

//Create a CPS function that returns the last character of a string
//Use the newly created function to show that you understand the concept



//Last Character of a string using CPS
function lastString (name, ret) {
    ret(name[name.length-1]);
    
}

lastString("johnny", function(x) {
   console.log(x);
});



/*Create a function that takes a string and a continuation (callback)
Your function should use the two previous functions you created to "return" 
a string that contains both the first and last character of the initial string */

function getFirstAndLast(string, callback) {
    firstString(string, function(x) {
        lastString(string, function(y) {
         callback(x+y);   
        });
        
    }); 
    }


getFirstAndLast("hello", function(newStr) {
    console.log(newStr);});
    
