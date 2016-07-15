Function.prototype.memoize = function () {
  var memo = {};
  let self = this;

  let _memoed = function (argument) {
    if (memo[argument]) {return memo[argument];
    } else {
      memo[argument] = self(argument);
      return memo[argument];
    }
  };

  return _memoed;
};


function makeChange(amount, coins = [25, 10, 5]) {
  if (amount === 0) { return [];}
  let bestChange = null;

  for (let coin of coins) {
    if (coin > amount) {continue;}

    let thisChange;
    if (amount % coin === 0) {
      thisChange = [];
      for (let i = 0; i < (amount / coin); i++) {
        thisChange.push(coin);
      }
    } else {
      let remainder = amount - coin;
      let bestFromRemainder = makeChange(remainder, coins);

      if (bestFromRemainder === null) { continue; }
      thisChange = [coin].concat(bestFromRemainder);
    }

    if (bestChange === null || thisChange.length < bestChange.length) {
      bestChange = thisChange;
      break;
    }
  }

  return bestChange;
}
