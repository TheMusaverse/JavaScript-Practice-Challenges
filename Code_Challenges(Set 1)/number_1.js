function fizzBuzz(str1, str2) {
  const totalLength = str1.length + str2.length;

  if (totalLength % 3 === 0 && totalLength % 5 === 0) {
    return "FizzBuzz";
  } else if (totalLength % 3 === 0) {
    return "Fizz";
  } else if (totalLength % 5 === 0) {
    return "Buzz";
  }
}
