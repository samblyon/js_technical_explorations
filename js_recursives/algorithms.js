// Returns the index of `target` in `sortedArray`, or -1 if it is not found.

function binarySearch (sortedArray, target) {
  if (sortedArray.length === 0) { return -1; }

  const mid = Math.floor(sortedArray.length / 2);
  if (sortedArray[mid] === target) { return mid; }

  let next;
  if (sortedArray[mid] > target) {
    next = sortedArray.slice(0, mid);
    return binarySearch(next, target);
  } else {
    next = sortedArray.slice(mid + 1);
    let nextResult = binarySearch(next, target);
    return (nextResult === -1) ? nextResult : nextResult + mid + 1;
  }
}


// Returns the longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, takes the first one.

function longestSymmetricSubstring (str) {
  const substrings = [];

  for (let start = 0; start < str.length; start++) {
    for (let len = 1; len <= str.length - start; len++) {
      substrings.push(str.slice(start, start + len));
    }
  }

  const symmetricSubs = substrings.filter((string) => {
    return isPalendrome(string);
  });

  let longest = null;
  for (let symsub of symmetricSubs) {
    if (longest === null || longest.length < symsub.length) {
      longest = symsub;
    }
  }

  return longest;
}

function isPalendrome(str) {
  if (str.length < 2) { return true; }
  if (str[0] !== str[str.length - 1]) {return false;}
  return isPalendrome(str.slice(1, -1));
}


// Returns all pairs of indices ([i, j]) for which `callback(array[i], array[j])` returns true.

// Order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }

function pairMatch (array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i === j) { continue; }
      if (callback(array[i], array[j])) {result.push([i, j]); }
    }
  }
  return result;
}
