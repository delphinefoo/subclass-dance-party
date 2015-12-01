var CatDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="cathead.png">');
  this.setPosition(top, left);
};

CatDancer.prototype = Object.create(Dancer.prototype);

CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.oldStep = CatDancer.prototype.step;

CatDancer.prototype.step = function() {
  this.oldStep();

  this.$node.toggle();
};