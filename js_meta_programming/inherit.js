function Parent(name) {}
function Child() {}

Parent.prototype.dance = () => { console.log("dancing")}

Function.prototype.inherits = function(parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Child.inherits(Parent);

a = new Child("Sam")
a.dance();
