// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".

//declare input var
var sentIn = "I'm a little tea pot";

// write a function that takes a string as an input:
var firstToUpper = function(str){
  // split the string into array of elements
  var splitSent = str.split(" ");
  // declare array for new sentence
  var newSent = [];
  // loop through
  for (var i = 0; i < splitSent.length; i++) {
    // split each element
    var splitWord = splitSent[i];
    // capitalize first letter of each word
    splitWord[0].toUpperCase();
    console.log(splitWord);
    // join word back into string

  }
  // return newSent
  return newSent;
};

console.log(firstToUpper(sentIn));
