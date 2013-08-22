//everything consolidated into a single global variable.
giraffeMaker.giraffeMethods = {};

giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

giraffeMaker.giraffeMethods.isHungry = function() {
  return this.hunger > 0;
};

giraffeMaker.giraffeMethods.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

giraffeMaker.giraffeMethods.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

giraffeMaker.giraffeMethods.browse = function() {
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

  newGiraffe.eat = giraffeMaker.giraffeMethods.eat;
  newGiraffe.browse = giraffeMaker.giraffeMethods.browse;
  newGiraffe.isTallEnough = giraffeMaker.giraffeMethods.isTallEnough;
  newGiraffe.isHungry = giraffeMaker.giraffeMethods.isHungry;
  newGiraffe.say = giraffeMaker.giraffeMethods.say;

  return newGiraffe;
};
