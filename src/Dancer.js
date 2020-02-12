// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  //below lines relate to move function
  
  this.goal = {top: top, left: left}; //point on screen to eventually move to
  this.curr = {top: top, left: left}; //instantiation of current position

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  window.dancers.push(this); //increment global dancerCount
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.move();
  //invoke move function

};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.curr.top = top;
  this.curr.left = left;
};

Dancer.prototype.setGoal = function(top, left){
  this.goal.top = top;
  this.goal.left = left;
};

Dancer.prototype.move = function () {

  //make sure not already at goal

  if (this.curr.top !== this.goal.top || this.curr.left !== this.goal.left) {

    //set move speed based on timeBetweenSteps
    var speed = this.timeBetweenSteps / 100;

    var newTop = this.curr.top;
    var newLeft = this.curr.left;

    if (this.goal.top > this.curr.top) {
      //if the goal is close enough, warp there
      newTop = this.goal.top - newTop > speed ? newTop + speed : this.goal.top;
    } else if (this.goal.top < this.curr.top) {
      //same except negative case
      newTop = newTop - this.goal.top > speed ? newTop - speed : this.goal.top;
    }

    if (this.goal.left > this.curr.left) {
      //if the goal is close enough, warp there
      newLeft = this.goal.left - newLeft > speed ? newLeft + speed : this.goal.left;
    } else if (this.goal.left < this.curr.left) {
      //same except negative case
      newLeft = newLeft - this.goal.left > speed ? newLeft - speed : this.goal.left;
    }
  
    this.setPosition(newTop, newLeft);

  }  

};
