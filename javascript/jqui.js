$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "Blind" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "Clip" ) {
      options = { to: { width: 300, height: 200 } };
    }

    // Run the effect
    $( "#effect" ).show( selectedEffect, options, 500, callback );
  };

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
    }, 99999999 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });

$( "#effect" ).hide();

} );
