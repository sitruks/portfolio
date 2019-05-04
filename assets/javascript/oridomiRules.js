// all of the customizations that are available
var folded = new OriDomi('.paper', {
    vPanels:          [20, 10, 10, 20, 10, 20, 10],     // number of panels when folding left or right (vertically oriented)
    hPanels:          5,     // number of panels when folding top or bottom
    speed:            1200,  // folding duration in ms
    ripple:           2,     // backwards ripple effect when animating
    shadingIntensity: .5,    // lessen the shading effect
    perspective:      800,   // smaller values exaggerate 3D distortion
    maxAngle:         40,    // keep the user's folds within a range of -40 to 40 degrees
    touchEnabled:     true,  // enable touch
    shading:          'hard' // change the shading type
  });

  folded.reveal(10, 'top');

  $('#seeResume').on('click', function () {
    $('#resume').find('.timeline').toggle();
    $(this).find('.project').toggleClass('active');
    $(this).find('.top-boxes-zoom').toggle();
    $(this).find('.bottom-boxes-zoom').toggle();
  });