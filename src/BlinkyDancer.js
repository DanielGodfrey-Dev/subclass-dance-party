var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blinky");
  this.$node.prepend('<img src="./img/elspeth.png" width="100"/>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;  

BlinkyDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.toggle();
};