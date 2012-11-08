FlexSlider-Resize
===
FlexSlider-Resize is a FlexSlider plugin which lowers the height of the slider in
non-rootpage sites. Also an Button is added for manual resize.

usage
===
put this into the head of your page right below the FlexSlider pieces.
```html
    <link rel="stylesheet" href="flexsliderResize/flexslider.resize.css" type="text/css" media="screen" />
    <script src="flexsliderResize/jquery.flexslider.resize.js"></script>
```
    
edit the FlexSlider hookup from
```html
    <!-- Hook up the FlexSlider -->
    <script type="text/javascript">
      $(window).load(function() {
        $('.flexslider').flexslider();
      });
    </script>
```
to
```html
    <!-- Hook up the FlexSlider -->
    <script type="text/javascript">
      $(window).load(function() {
        $('.flexslider').flexslider();
        $('.flexslider').flexsliderResize(200, 400);
      });
    </script>
```
and insert instead of 200 and 400 your desired heights.    

License
===
jQuery FlexSlider-Resize plugig license under MIT licence
https://github.com/traeger/FlexSlider-Resize

uses jQuery FlexSlider license under MIT licence.
http://www.woothemes.com/flexslider/

Copyright 2012 Marco Träger
Free to use under the MIT license.