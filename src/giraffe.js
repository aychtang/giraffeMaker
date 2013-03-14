var giraffeMaker = function(name, height){
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  newGiraffe.eat = function() {
    if(newGiraffe.height > 2){
      if(newGiraffe.hunger > 0){
        newGiraffe.hunger -= height;
      } else {
        console.log(newGiraffe.name + " is not hungry.");
      }
    } else {
      console.log(newGiraffe.name + " is too short to reach the trees.");
    }
    }
  newGiraffe.greet = function() {
    console.log('Hello, my name is ' + newGiraffe.name + ', it is nice to meet you.');
  };
  return newGiraffe;
};