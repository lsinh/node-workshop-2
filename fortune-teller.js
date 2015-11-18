//module.exports = {
//  getFortune: randomPeace

//};

//Accessing module located in library folder, in a file called fortune.js
var randomPeace = require('./library/fortune.js').getFortune;


//calling fortune for first time
//console.log(fortune.getFortune());


 for (var i = 0; i < process.argv[2]; i++) {
        randomPeace();
        };
    