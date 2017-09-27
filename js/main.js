// Avoid `console` errors in browsers that lack a console.
(function() {
  for (var a, e = function() {},
  b = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),
  c = b.length,
  d = window.console = window.console || {}; c--;)
    a = b[c],
    d[a] || (d[a] = e)
})();

// Site js object
var Site;

(function($) {
  'use strict';

  Site = {
    /**
		 * Tabs for each product on tactile device
		 *
		 */
    init: function(elt) {

      this.videoEmbedOnClick();
      $('.carousel-product').slick({
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 2000,
            settings: "unslick",
          },
          {
            breakpoint: 1480,
            settings: "unslick",
          },
          {
            breakpoint: 799,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
     });
      $('.carousel-instagram').slick({
        infinite: true,
        dots: true,
        responsive: [
          {
            breakpoint: 2000,
            settings: "unslick",
          },
          {
            breakpoint: 1480,
            settings: "unslick",
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
     });
    },
    /**
		 * Switch video poster to embed youtube autoplay on click
		 *
		 */
    videoEmbedOnClick: function() {
      // click to show video
      var videoIsPlaying = false;

      $('.videoCTA').on('click', function(e) {
        e.stopPropagation();

        var $videoContainer = $(this).parent();
        var urlToPlay = $videoContainer.data('src');

        $videoContainer.find('.videoCTA').hide();
        $videoContainer.find('.video-wrapper').html('<iframe width="560" height="315" src="' + urlToPlay + '?autoplay=1&control=0showinfo=0" frameborder="0" allowfullscreen></iframe>').show();
        videoIsPlaying = true;
      });

      // click outside of the video id needed
      $('body').on('click', function(e) {
        e.stopPropagation();

        if (videoIsPlaying) {
          $('.video-wrapper').html('');
          $('.video-player').hide();
          $('.videoCTA').show();
          videoIsPlaying = false;
        }
      });
    }
  };

  // call init function
  window.onload = function() {
    Site.init();
  }

})(jQuery);
