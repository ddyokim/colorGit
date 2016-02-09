var colors = [ '#1e6823', '#44a340', '#8cc665', '#d6e685', '#eee' ];
var converts = [ '#ff5675', '#ff6a89', '#ff88a7', '#ff9cbb', '#ffb0cf' ];

var updateColors = function () {
  for (var i = 0; i < colors.length; i += 1) {
      $('.day[fill='+colors[i] + ']').attr('fill', converts[i]);
      $('ul.legend li[style="background-color: '+colors[i]+'"]').css('background-color', converts[i]);
  }
}

$('#js-pjax-container').bind("DOMSubtreeModified DOMNodeRemoved DOMElementNameChanged", function() {
  if ($('.contributions-tab').length == 1) {
      updateColors();
  }
});

// Initialize
updateColors();

