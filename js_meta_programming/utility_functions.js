
// Returns a copy of the original function, where `this` is set to `context`.

Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return (...callArgs) => {
    return that.call(context, ...bindArgs.concat(callArgs));
  };
};

// Sets up target to inherit from given `Parent` constructor.

Function.prototype.inherits = function (Parent) {
  let Surrogate = function () {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// Curries a function. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invokes the
// original `function` with the accumulated arguments, using `object` as the
// context.

function myCurry(func, object, numArgs) {
  const args = [];
  return function _curriedFunc (argument) {
    args.push(argument);
    return (args.length === numArgs) ? func.apply(object, args) : _curriedFunc;
  };
}

function adder(a, b){
  return a + b
}

console.log(adder.myCurry(2)(1)(2))
