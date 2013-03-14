//function sharing - these are global functions which the maker function points to.

var giraffeMaker = function(name, height){
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  newGiraffe.eat = eat;
  newGiraffe.greet = greet;
  return newGiraffe;
};

var eat = function(){
  if(this.height > 2){
    if(this.hunger > 0){
      this.hunger -= this.height;
    } else {
      console.log(this.name + " is not hungry.");
    }
  } else {
    console.log(this.name + " is too short to reach these trees.");
  }
};

var greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};