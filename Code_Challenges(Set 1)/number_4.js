function firstPalindrome(words) {
  for (let word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }
  return "";
}
