var ShiftyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shifty"); //add class
  this.$node.prepend('<img src="./img/ashiok.png" width="100"/>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ShiftyDancer.prototype = Object.create(Dancer.prototype);

ShiftyDancer.prototype.oldStep = Dancer.prototype.step;  

ShiftyDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.toggle();
};