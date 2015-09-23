/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research). This code converts human sentences into meerkat speech.
*/

var defaultPunctuationHash = {
  " ": true,
  ".": true,
  ",": true,
  "!": true,
  "-": true,
  "|": true
}

exports.convertToMeekrat = function(inputString, punctuationHash) {
  punctuationHash = punctuationHash || defaultPunctuationHash;

  var position = 0;
  var formattedArray = [];

  var inputArray = inputString.split("");
  inputArray.push("|");

  //Break up input by punctuation
  for (var i = 0; i < inputArray.length; i++) {
    if (punctuationHash.hasOwnProperty(inputArray[i])) {
      if (position !== i) {
        formattedArray.push(inputArray.slice(position, i).join(""));
      }
      formattedArray.push(inputArray[i]);
      position = i + 1;
    }
  }
  console.log(formattedArray);

  //Convert non-punctuation to the word 'chirp'
  for (var i = 0; i < formattedArray.length; i++) {
    if (!punctuationHash.hasOwnProperty(formattedArray[i])) {
      formattedArray[i] = "chirp";
    }
  }
  console.log(formattedArray);
  return formattedArray.join("");
}
