//everything consolidated into a single global variable.

var giraffeMaker = function(name, height){
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  newGiraffe.greet = giraffeMaker.giraffeMethods.greet;
  newGiraffe.eat = giraffeMaker.giraffeMethods.eat;
  return newGiraffe;
};

giraffeMaker.giraffeMethods = {};

giraffeMaker.giraffeMethods.greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};

giraffeMaker.giraffeMethods.eat = function(){
  if(this.height > 2){
    if(this.hunger > 0){
      this.hunger -= this.height;
    } else {
      console.log(this.name + " is not hungry.");
    }
  } else {
    console.log(this.name + " too short to reach these trees.");
  }
};