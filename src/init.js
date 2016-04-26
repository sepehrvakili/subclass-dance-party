$(document).ready(function() {
  window.dancers = [];

  // var addDancerButton = function(cssClassButton, cssClassDancer, dataName) {
  //   $(cssClassButton).on('click'), function(event) {
  //     var dancerFuncName = $(this).data(dataName);
  //     var dancerFunc = window[dancerFuncName];

  //     var dancer = new dancerFunc(
  //       $('body').height() * Math.random(),
  //       $('body').width() * Math.random(),
  //       Math.random() * 1000
  //       );

  //     $('body').append(dancer.$node.addClass(cssClassDancer));
  //   }; 
  // };

  // addDancerButton('.addBlinkyDancerButton', 'blinky', 'blinky-dancer-maker-function-name');
  // addDancerButton('.addBouncyDancerButton', 'bouncy', 'bouncy-dancer-maker-function-name');
  // addDancerButton('.addSlidyDancerButton', 'slidy', 'slidy-dancer-maker-function-name');


  $('.addBlinkyDancerButton').on('click', function(event) {
    var blinkyDancerMakerFunctionName = $(this).data('blinky-dancer-maker-function-name');
    var blinkyDancerMakerFunction = window[blinkyDancerMakerFunctionName];

    // make a dancer with a random position
    var blinkyDancer = new blinkyDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(blinkyDancer);
    $('body').append(blinkyDancer.$node.addClass('blinky'));
  });

  $('.addBouncyDancerButton').on('click', function(event) {
    var bouncyDancerMakerFunctionName = $(this).data('bouncy-dancer-maker-function-name');
    var bouncyDancerMakerFunction = window[bouncyDancerMakerFunctionName];

    // make a dancer with a random position
    console.log(bouncyDancerMakerFunction, bouncyDancerMakerFunctionName);
    var bouncyDancer = new bouncyDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(bouncyDancer);
    $('body').append(bouncyDancer.$node.addClass('bouncy'));
  });

  $('.addSlidyDancerButton').on('click', function(event) {
    var slidyDancerMakerFunctionName = $(this).data('slidy-dancer-maker-function-name');
    var slidyDancerMakerFunction = window[slidyDancerMakerFunctionName];

    // make a dancer with a random position
    console.log(slidyDancerMakerFunction, slidyDancerMakerFunctionName);
    var slidyDancer = new slidyDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(slidyDancer);
    $('body').append(slidyDancer.$node.addClass('slidy'));
  });

  $('.lineUpButton').on('click', function(e) {
    var top = 100;
    window.dancers.forEach(function(dancer) {
      top += 50;
      dancer.lineUp(top, 150);
    });
  });
});








