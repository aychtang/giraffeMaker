//shared functions consolidated into a single object, reducing the amount of variables in the global scope to two.
var giraffeMethods = {};

giraffeMethods.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

giraffeMethods.isHungry = function() {
  return this.hunger > 0;
};

giraffeMethods.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

giraffeMethods.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

giraffeMethods.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};

var giraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  newGiraffe.eat = giraffeMethods.eat;
  newGiraffe.browse = giraffeMethods.browse;
  newGiraffe.isTallEnough = giraffeMethods.isTallEnough;
  newGiraffe.isHungry = giraffeMethods.isHungry;
  newGiraffe.say = giraffeMethods.say;

  return newGiraffe;
};
