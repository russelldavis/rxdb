"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFilterNotEmpty = arrayFilterNotEmpty;
exports.asyncFilter = asyncFilter;
exports.batchArray = batchArray;
exports.countUntilNotMatching = countUntilNotMatching;
exports.isMaybeReadonlyArray = isMaybeReadonlyArray;
exports.lastOfArray = lastOfArray;
exports.maxOfNumbers = maxOfNumbers;
exports.removeOneFromArrayIfMatches = removeOneFromArrayIfMatches;
exports.shuffleArray = shuffleArray;
exports.sumNumberArray = sumNumberArray;
exports.toArray = toArray;
function lastOfArray(ar) {
  return ar[ar.length - 1];
}

/**
 * shuffle the given array
 */
function shuffleArray(arr) {
  return arr.slice(0).sort(() => Math.random() - 0.5);
}
function toArray(input) {
  return Array.isArray(input) ? input.slice(0) : [input];
}

/**
 * Split array with items into smaller arrays with items
 * @link https://stackoverflow.com/a/7273794/3443137
 */
function batchArray(array, batchSize) {
  array = array.slice(0);
  var ret = [];
  while (array.length) {
    var batch = array.splice(0, batchSize);
    ret.push(batch);
  }
  return ret;
}

/**
 * @link https://stackoverflow.com/a/15996017
 */
function removeOneFromArrayIfMatches(ar, condition) {
  ar = ar.slice();
  var i = ar.length;
  var done = false;
  while (i-- && !done) {
    if (condition(ar[i])) {
      done = true;
      ar.splice(i, 1);
    }
  }
  return ar;
}

/**
 * returns true if the supplied argument is either an Array<T> or a Readonly<Array<T>>
 */
function isMaybeReadonlyArray(x) {
  // While this looks strange, it's a workaround for an issue in TypeScript:
  // https://github.com/microsoft/TypeScript/issues/17002
  //
  // The problem is that `Array.isArray` as a type guard returns `false` for a readonly array,
  // but at runtime the object is an array and the runtime call to `Array.isArray` would return `true`.
  // The type predicate here allows for both `Array<T>` and `Readonly<Array<T>>` to pass a type check while
  // still performing runtime type inspection.
  return Array.isArray(x);
}

/**
 * Use this in array.filter() to remove all empty slots
 * and have the correct typings afterwards.
 * @link https://stackoverflow.com/a/46700791/3443137
 */
function arrayFilterNotEmpty(value) {
  if (value === null || value === undefined) {
    return false;
  }
  return true;
}
function countUntilNotMatching(ar, matchingFn) {
  var count = 0;
  var idx = -1;
  for (var _item of ar) {
    idx = idx + 1;
    var matching = matchingFn(_item, idx);
    if (matching) {
      count = count + 1;
    } else {
      break;
    }
  }
  return count;
}
async function asyncFilter(array, predicate) {
  var filters = await Promise.all(array.map(predicate));
  return array.filter((...[, index]) => filters[index]);
}

/**
 * @link https://stackoverflow.com/a/3762735
 */
function sumNumberArray(array) {
  var count = 0;
  for (var i = array.length; i--;) {
    count += array[i];
  }
  return count;
}
function maxOfNumbers(arr) {
  return Math.max(...arr);
}
//# sourceMappingURL=utils-array.js.map