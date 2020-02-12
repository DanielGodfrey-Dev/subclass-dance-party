var ExperimentalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("experimental");
  this.$node.prepend('<img src="./img/gideon.png" width="100"/>'); //gideon is dancing with
  var choose = Math.floor(Math.random() * 2) % 2;                 //either
  if (choose) {this.$node.append('<img src="./img/jace.png" width="100"/>');} //jace
  else {this.$node.append('<img src="./img/chandra.png" width="100"/>');} //or chandra

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ExperimentalDancer.prototype = Object.create(Dancer.prototype);

ExperimentalDancer.prototype.oldStep = Dancer.prototype.step;  

ExperimentalDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // this.$node.toggle();
};