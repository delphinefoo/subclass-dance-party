var HelloDancer = function(top,left,timeBetweenSteps){
  BlinkyDancer.call(this,top,left,timeBetweenSteps);


};

HelloDancer.prototype = Object.create(BlinkyDancer.prototype);
HelloDancer.prototype.constructor = HelloDancer;
//HelloDancer.prototype.oldStep = HelloDancer.prototype.step;

/* makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.s
  this.$node.toggle();
};
*/
HelloDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.text("hello");
  this.$node.css("border-color","yellow");
  this.$node.toggle();
}

