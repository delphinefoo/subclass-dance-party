var helloDancer = function(top,left,timeBetweenSteps){
  makeBlinkyDancer.call(this,top,left,timeBetweenSteps);


};

helloDancer.prototype = Object.create(makeBlinkyDancer.prototype);
// makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

/* makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.s
  this.$node.toggle();
};
*/
helloDancer.prototype.step = function(){
  this.oldStep();

  this.$node.text("hello");
  this.$node.css("border-color","yellow");
  this.$node.toggle();
}

