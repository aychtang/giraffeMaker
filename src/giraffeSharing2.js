//shared functions consolidated into a single object, reducing the amount of variables in the global scope to two.

var giraffeMaker = function(name, height){
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  newGiraffe.eat = giraffeMethods.eat;
  newGiraffe.greet = giraffeMethods.greet;

  return newGiraffe;
};

var giraffeMethods = {};

giraffeMethods.greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};

giraffeMethods.eat = function(){
  if (this.height > 2){
    if (this.hunger > 0){
      this.hunger -= this.height;
    } else {
      console.log(this.name + " is not hungry.");
    }
  } else {
    console.log(this.name + " too short to reach these trees.");
  }
};