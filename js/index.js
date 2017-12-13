
// random circles function
$.fn.extend({
  randomCircles: function(options) {
    var defaults = {
      circleCount: 70,
      fillColor: '#B22222',
      opacityVar: 0.6
    };
    var options = $.extend(defaults, options);
    
    return this.each(function() {
      var o = options;
      for (var i = 0; i <= o.circleCount; i++) {
        var randomDi = Math.floor( Math.random() * 50 ) + 3;
        var randomX = Math.floor( Math.random() * $(window).width() );
        var randomY = Math.floor( Math.random() * $(window).height() );
        var opaciVar = Math.random() * o.opacityVar;
        var randomTra = (Math.random() * 500) + 200;
        
        $(this).append('<div class="rc--random-circle rc--' + i + '"></div>');
        $('.rc--' + i).css({
          background: o.fillColor,
          width: randomDi,
          height: randomDi,
          top: 0,
          left: randomX
        })
        
        var bouncin = anime({
          targets: '.rc--' + i,
          opacity: opaciVar,
          top: randomY,
          duration: 1500
        });
        
        
      }
    });
  }
});
// calling random circles
$('.rc--circles-wrap').randomCircles();