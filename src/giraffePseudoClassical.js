//pseudo-classical inheritence example

var Giraffe = function(name, height){
  this.name = name;
  this.height = height;
};

Giraffe.prototype.greet = function(){
  console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
};

Giraffe.prototype.eat = function(){
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

Giraffe.prototype.hunger = 10;

var Stanley = new Giraffe('stanley', 5);