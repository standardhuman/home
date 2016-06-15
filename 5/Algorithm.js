// Write an algorithm that takes a string and returns the length of the longest word in that string. Your output should be a number.
//
// Use "The quick brown fox jumped over the lazy dog" as a test case input string.

// declare input sentence var
var sentence = "The quick brown fox jumped over the lazy dog";
// declare function that takes sentence,
var theLongest = function(sent){
  // splits sentence into elements, divided by spaces
  var splitSent = sent.split(" ");
  // delare max length tracking var
  var maxLength = 0;
  // loops through the elements
  // checks the length of each element
  for(var i = 0; i < splitSent.length; i++){
    // if the current element length is greater than the max length var
    if(splitSent[i].length > maxLength){
      // overwrite the max length var with the current value
       maxLength = splitSent[i].length;
      // else do nothing or return the current val?
    }
    // return length
  };
  return maxLength;
};
console.log(theLongest(sentence));
