$(document).ready(function() {

    // Set main content height
    var navbarHeight = $("nav").outerHeight();
    $("main").height($(window).height() - navbarHeight); 

});


/* Flexbox Accordion */

var section = $('.accordion-wrapper li');

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);