//function sharing - these are global functions which the maker function points to.

var isTallEnough = function(treeHeight) {
  return this.height > treeHeight;
};

var isHungry = function() {
  return this.hunger > 0;
};

var say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

var eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

var browse = function() {
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

  newGiraffe.eat = eat;
  newGiraffe.browse = browse;
  newGiraffe.isTallEnough = isTallEnough;
  newGiraffe.isHungry = isHungry;
  newGiraffe.say = say;

  return newGiraffe;
};

