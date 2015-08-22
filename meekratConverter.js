/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate sentences into meerkat speech.
 by replacing the words in the sentence with "chirp".
*/

//Input:  arrayToSplit - An array of strings, splitingString - a string to split by
//Output: An array with the same string value (if you used array.join(""))
//        but the splittingString has it's own index value in the array
function splitArrayOfStringsBy(arrayToSplit, splitingString) {
  var arrayToSplitNew = [];
  for (var i = 0; i < arrayToSplit.length; i++) {
    var splitArray = arrayToSplit[i].split(splitingString);
    for (var j = 0; j < splitArray.length - 1; j++) {
      arrayToSplitNew.push(splitArray[j], splitingString);
    }
    arrayToSplitNew.push(splitArray[splitArray.length - 1]);
  }
  return arrayToSplitNew;
}

function convertToMeekrat(sentence) {
  var sentenceArray = [ sentence ];
  //Convert to array with spaces
  sentenceArray = splitArrayOfStringsBy(sentenceArray, " ");
  //Convert to array with periods
  sentenceArray = splitArrayOfStringsBy(sentenceArray, ".");
  //Convert to array with dashes
  sentenceArray = splitArrayOfStringsBy(sentenceArray, "-");
  //Convert to array with commas
  sentenceArray = splitArrayOfStringsBy(sentenceArray, ",");

  //Loop through array and change any string (that is not "" or one of the
  //strings above) to chirp (Meekrat)
  for (var i = 0; i < sentenceArray.length; i++) {
    if (
      !(sentenceArray[i] === "" || sentenceArray[i] === " " ||
      sentenceArray[i] === "." || sentenceArray[i] === "-" ||
      sentenceArray[i] === ",")
      ) {sentenceArray[i] = "chirp";}
  }
  return sentenceArray.join("");
}

sentence1 = convertToMeekrat(sentence1);
sentence2 = convertToMeekrat(sentence2);

assert(sentence1 === "chirp chirp chirp.", "sentence 1 should have 3 chirps");
assert(sentence2 === "chirp chirp chirp chirp chirp chirp chirp chirp chirp.",
  "sentence 2 should have 9 chirps");

//My new sentence and assertion
sentence3 = "Give me more fruit-cake, birds, and poisonous scorpions.";
sentence3 = convertToMeekrat(sentence3);
assert(sentence3 === "chirp chirp chirp chirp-chirp, chirp, chirp chirp chirp.",
  "sentence 3 should have 8 chrirps, commas, and a dash");
