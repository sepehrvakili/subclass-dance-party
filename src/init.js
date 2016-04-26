$(document).ready(function() {
  window.dancers = [];

  var addDancerButton = function(cssClassButton, cssClassDancer, dataName) {
    $(cssClassButton).on('click', function(event) {
      var dancerFuncName = $(this).data(dataName);
      var dancerFunc = window[dancerFuncName];

      var dancer = new dancerFunc(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
        );
      window.dancers.push(dancer);
      $('body').append(dancer.$node.addClass(cssClassDancer));
    }); 
  };

  $('.lineUpButton').on('click', function(e) {
    var top = 100;
    window.dancers.forEach(function(dancer) {
      top += 50;
      dancer.setPosition(top, 150);
      dancer.position = dancer.$node.position();
      //console.log(dancer.position);
    });
  });

  $('body').on('mouseover', '.dancer', function(e) {
    $(this).toggleClass('bouncyMouseHover');  
  });

  addDancerButton('.addBlinkyDancerButton', 'blinky', 'blinky-dancer-maker-function-name');
  addDancerButton('.addBouncyDancerButton', 'bouncy', 'bouncy-dancer-maker-function-name');
  addDancerButton('.addSlidyDancerButton', 'slidy', 'slidy-dancer-maker-function-name');

  // window.dancers.forEach(function(dancer) {
  //   var topD = Math.abs(bouncy.$node.top - dancer.$node.top);
  //   var leftD = Math.abs(bouncy.$node.left - dancer.$node.left);

  //   if (topD < 40 && leftD < 40) {
  //     $(bouncy).toggleClass(something)
  //   }
  // });

});








