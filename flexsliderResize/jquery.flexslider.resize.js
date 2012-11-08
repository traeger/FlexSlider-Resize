/*
 * jQuery FlexSlider-Resize plugig
 *
 * uses jQuery FlexSlider license under MIT licence.
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 Marco Träger
 * Free to use under the MIT license.
 */

;(function ($) {
  //FlexSliderResize: Object Instance
  $.flexsliderResize = function(el, smallsize, bigsize) {
    var slider = $(el);
    slider.resize = new Object();
    
    // css for small and big size
    var cssSmall = {height: smallsize};
    var cssBig   = {height: bigsize};
    
    var isSmall = false;
    var animateSpeed = 500;
    
    slider.resize.init = function() {
      // do nothing on the start page (local pathname is empty)
      if(window.location.pathname == "") {
        return;
      }
      
      // indication variable whether the slider is currently small
      isSmall = true;
      
      // set initial size
      slider.each(function() {
        $(slider).find('.slides').css(cssSmall);
        $(slider).find('.slides li').css(cssSmall)
          .css("overflow", "hidden");
      });
      
      //FlexSliderResize: Resize Button
      var resizeButton = $('<li><a class="resize" href="#"></a></li>');
      
      $(slider).find('.flex-direction-nav').append(resizeButton);
      $(resizeButton).click(function() {
        if(isSmall) {
          isSmall = false;
          $(slider).find('.slides').animate(cssBig, animateSpeed);
          $(slider).find('.slides li').animate(cssBig, animateSpeed);
        } else {
          isSmall = true;
          $(slider).find('.slides').animate(cssSmall, animateSpeed);
          $(slider).find('.slides li').animate(cssSmall, animateSpeed);
        }
      });
    }
    
    slider.resize.init();
  }
  
  $.fn.flexsliderResize = function(smallsize, bigsize) {
    new $.flexsliderResize(this, smallsize, bigsize);
  }
})(jQuery);