var giraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  newGiraffe.isTallEnough = function(treeHeight) {
    return newGiraffe.height > treeHeight;
  };

  newGiraffe.isHungry = function() {
    return newGiraffe.hunger > 0;
  };

  newGiraffe.say = function(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + newGiraffe.name + ', it is nice to meet you.',
      'notHungry': newGiraffe.name + ' is not hungry.',
      'notTallEnough': newGiraffe.name + ' is too short to reach the trees.',
      'ate': 'That was delicious!'
    };

    return console.log(sentences[option]);
  };

  newGiraffe.eat = function() {
    if (newGiraffe.isHungry()) {
      newGiraffe.hunger -= height;
      newGiraffe.say('ate');
    } else {
      newGiraffe.say('notHungry');
    }
  };

  newGiraffe.browse = function() {
    if (newGiraffe.isTallEnough(2)) {
      newGiraffe.eat();
    } else {
      newGiraffe.say('notTallEnough')
    }
  };

  return newGiraffe;
};
