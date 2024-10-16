﻿// When the page is loaded
$(document).ready(function () {
    //Execute the slideShow - set time for each images in milliseconds
    var timePerImage = 1500;
    slideShow(timePerImage);

});


function slideShow(speed) {

    //Set the opacity of all images to 0
    $('ul.slideshow li').css({ opacity: 0.0 });

    //Get the first image and display it (set it to full opacity)
    $('ul.slideshow li:first').css({ opacity: 1.0 }).addClass('show');

    //Call the gallery function to run the slideshow	
    var timer = setInterval('gallery()', speed);

    //pause the slideshow on mouse over
    $('ul.slideshow').hover(
		function () {
		    clearInterval(timer);
		},
		function () {
		    timer = setInterval('gallery()', speed);
		}
	);

}

function gallery() {

    //if no IMGs have the show class, grab the first image
    var current = ($('ul.slideshow li.show') ? $('ul.slideshow li.show') : $('#ul.slideshow li:first'));

    //trying to avoid speed issue
    if (current.queue('fx').length == 0) {

        //Get next image, if it reached the end of the slideshow, rotate it back to the first image
        var next = ( (current.next().length) ? ( (current.next().attr('id') == 'dummy') ? $('ul.slideshow li:first') : current.next()) : $('ul.slideshow li:first'));
//        var next = current.next().length ? $('ul.slideshow li:first') : current.next() : $('ul.slideshow li:first');

        //Set the fade in effect for the next image, show class has higher z-index
        next.css({ opacity: 0.0 }).addClass('show').animate({ opacity: 1.0 }, 1000);

        //Hide the current image
        current.animate({ opacity: 0.0 }, 1000).removeClass('show');
    }

}