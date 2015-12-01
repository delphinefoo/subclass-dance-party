var ColorChangeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="colorChange"> </div>');
  this.setPosition(top, left);

};


ColorChangeDancer.prototype = Object.create(Dancer.prototype);

ColorChangeDancer.prototype.constructor = ColorChangeDancer;

ColorChangeDancer.prototype.oldStep = ColorChangeDancer.prototype.step;

ColorChangeDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
