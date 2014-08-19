/**
 * Created by abhik.mitra on 18/08/14.
 */
$(document).ready(function(){
    $('#nav').localScroll(800);

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#intro').parallax("49%", -1,false);
    jQuery('ul.sf-menu').superfish();



})