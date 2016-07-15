

function sum() {
  // let args = Array.prototype.slice.call(arguments);
  let sum = 0;
  for( let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}

// console.log(sum(1,2,3,4))

Function.prototype.myBind = function () {
  const myBindArguments = Array.prototype.slice.call(arguments);
  const self = this;

  return function () {
    const args = Array.prototype.slice.call(arguments);
    self.apply(myBindArguments[0], myBindArguments.slice(1).concat(args))
  };
};


function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach( num => sum+=num );
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;


}

// console.log(curriedSum(3)(1)(2)(3))


Function.prototype.curry = function(numArgs) {
  let args = [];
  let self = this
  function _curry (num) {
    args.push(num);
    if (args.length === numArgs) {
      return self(...args)
    } else {
      return _curry;
    }
  }

  return _curry;


}

function adder(a, b){
  return a + b
}

console.log(adder.curry(2)(1)(2))
