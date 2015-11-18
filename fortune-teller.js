
//Accessing module located in library folder, in a file called fortune.js
var fortune = require('./library/fortune');


//calling fortune for first time
//console.log(fortune.getFortune());

fortune(function(x){
    console.log(x);    


 for (var i = 0; i < process.argv[2]; i++) {
        fortune(function(x) {
            console.log(x);
        });
    }
});