function categorizeAndSort(arr) {
  const evens = [];
  const odds = [];
  const chars = [];

  for (let item of arr) {
    if (typeof item === "number" && Number.isInteger(item)) {
      if (item % 2 === 0) {
        evens.push(item);
      } else {
        odds.push(item);
      }
    } else if (typeof item === "string" && item.length === 1) {
      chars.push(item);
    }
  }

  function manualSort(array) {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }

  return {
    evens: manualSort(evens),
    odds: manualSort(odds),
    chars: manualSort(chars),
  };
}

console.log(categorizeAndSort([2, 3.0, "a", 7, "z", 4.0, 1, "b"]));
