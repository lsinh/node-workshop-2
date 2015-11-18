module.exports = {
  
    getFortune: randomPeace

};

function randomPeace() {
    var quotes = ["An eye for an eye only ends up making the whole world blind.", "Those who are free of resentful thoughts surely find peace.",
    "Peace cannot be kept by force; it can only be achieved by understanding.", "We can never obtain peace in the outer world until we make peace with ourselves.", 
    "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", "If we have no peace, it is because we have forgotten that we belong to each other."]
    var choose = Math.round(Math.random() * quotes.length) - 1;
    
    return quotes[choose];
}





