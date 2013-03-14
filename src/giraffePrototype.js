//prototypal inheritence

var giraffeMaker = function(name, height){
  var newGiraffe = Object.create(giraffeMaker.stuff);
  newGiraffe.name = name;
  newGiraffe.height = height;

  return newGiraffe;
};

giraffeMaker.stuff = {};

giraffeMaker.stuff.greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};

giraffeMaker.stuff.eat = function(){
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

giraffeMaker.stuff.hunger = 10;