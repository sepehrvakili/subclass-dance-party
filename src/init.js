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
      var newNode = dancer.$node;
      newNode.addClass(cssClassDancer);

      window.dancers.forEach(function(existingDancer) {
        var topD = Math.abs(dancer.top - existingDancer.top);
        var leftD = Math.abs(dancer.left - existingDancer.left);
        if (topD < 100 && leftD < 100) {
          newNode.addClass('interact');
          existingDancer.$node.addClass('interact');
        }
      });
      window.dancers.push(dancer);
      $('body').append(newNode);
    });

  };

  $('.lineUpButton').on('click', function(e) {
    var left = 250;
    var height = 800;
    var top = 40;
    window.dancers.forEach(function(dancer) {
      dancer.$node.animate({left: left + 'px', top: top + 'px'}, 'slow');
      if ( top > height ) {
        top = 20;
        left = 450;
      }
      top += 150;
    });
  });

  $('.shuffleButton').on('click', function(e) {
    window.dancers.forEach(function(dancer) {
      var top = $('body').height() * Math.random();
      var left = $('body').width() * Math.random();
      dancer.$node.animate({left: left + 'px', top: top + 'px'}, 'slow');

    });
  });

  $('body').on('mouseover', '.dancer', function(e) {
    $(this).toggleClass('bouncyMouseHover');
  });

  $('body').on('click', '.dancer', function(e) {
    $(this).toggleClass('move');
  });

  $(document).keydown(function(key) {
    console.log('clicked inside keydown');
    switch(parseInt(key.which,10)) {
      case 65:
      case 37:
        $('body').find('.move').animate({left: '-=20px'}, 'fast');
        break;
      case 83:
      case 40:
        $('body').find('.move').animate({top: '+=20px'}, 'fast');
        break;
      case 87:
      case 38:
        $('body').find('.move').animate({top: '-=20px'}, 'fast');
        break;
      case 68:
      case 39:
        $('body').find('.move').animate({left: '+=20px'}, 'fast');
        break;
      default: return;
    }
  });

  addDancerButton('.addBlinkyDancerButton', 'blinky', 'blinky-dancer-maker-function-name');
  addDancerButton('.addBouncyDancerButton', 'bouncy', 'bouncy-dancer-maker-function-name');
  addDancerButton('.addSlidyDancerButton', 'slidy', 'slidy-dancer-maker-function-name');



});








