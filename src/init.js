$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').unbind('click');
  $('.addDancerButton').on('click', buttonLogic);
});

var buttonLogic = function (event) {
  /*the on function binds a method to each ('.addDancerButton) above which acts as though
    buttonLogic.call(BUTTON) was just run.
    the data-* tag adds its contents to a camelCase item in the .dataset property of
    the DOM object.
    Thereby we bypass the faulty jQuery call which bound the first dancerMakerFunctionName
    to each button rather than its respective button.
*/
  var dancerMakerFunction = window[this.dataset.dancerMakerFunctionName];

  /* Now that we know the correct function name, make a dancer with a random position
      by calling the function name from the global scope.*/

  var dancer = new dancerMakerFunction(
    $('.topbar').height() + ($("body").height() - $('.topbar').height()) * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(dancer.$node);
};
