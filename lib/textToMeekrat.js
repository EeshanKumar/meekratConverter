/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research). This code converts human sentences into meerkat speech.
*/
exports.convertToMeekrat = function(sentence) {
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

/* ------------- Helper functions ---------------- */
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
