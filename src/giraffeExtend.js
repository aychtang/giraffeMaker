//extending properties saves you from having to add each one individually.

var giraffeMaker = function(name, height){
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  extend(newGiraffe, giraffeMaker.giraffeMethods);

  return newGiraffe;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

giraffeMaker.giraffeMethods = {};

giraffeMaker.giraffeMethods.greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};

giraffeMaker.giraffeMethods.eat = function(){
  if (this.height > 2){
    if (this.hunger > 0){
      this.hunger -= this.height;
    } else {
      console.log(this.name + " is not hungry.");
    }
  } else {
    console.log(this.name + " too short to reach these trees.");
  };
};

giraffeMaker.giraffeMethods.hunger = 10;