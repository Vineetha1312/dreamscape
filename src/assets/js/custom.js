jQuery(function ($) {
	"use strict";

var $window = $(window);
var windowsize = $(window).width();
var $root = $("html, body");

/*----- Menu On click -----*/
if ($("#sidemenu_toggle").length) {
    $("body").addClass("pushwrap");

    $("#sidemenu_toggle").on("click", function (e) {
        e.preventDefault();
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active");
        $("#close_side_menu").fadeIn(700);
    });

    $("#close_side_menu").on("click", function (e) {
        e.preventDefault();
        $(".side-menu").removeClass("side-menu-active");
        $(this).fadeOut(200);
        $(".pushwrap").removeClass("active");
    });

    $("#btn_sideNavClose").on("click", function (e) {
        e.preventDefault();
        $(".side-menu").removeClass("side-menu-active");
        $("#close_side_menu").fadeOut(200);
        $(".pushwrap").removeClass("active");
    });
}

/*----- Smooth Scrolling for Anchor Links -----*/
$(".side-menu a[href^='#']").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var target = $(this.hash); // Target section
    if (target.length) {
        // Smooth scroll to the target section
        $("html, body").animate(
            {
                scrollTop: target.offset().top,
            },
            2000,
            "swing",
            function () {
                // Close the menu (on mobile only)
                if (windowsize < 768) {
                    $(".side-menu").removeClass("side-menu-active");
                    $("#close_side_menu").fadeOut(200);
                    $(".pushwrap").removeClass("active");
                }
            }
        );
    }

    // Update the active class for the clicked link
    $(".side-menu a").removeClass("active");
    $(this).addClass("active");
});

/*----- Set Active Class on Page Load and While Scrolling -----*/
$(document).ready(function () {
    $(".side-menu a[href='#home']").addClass("active"); // Default active link on page load

    // Sections to track
    var sections = $(".section"); // Ensure all sections have a `class="section"`

    $window.on("scroll", function () {
        var scrollPosition = $window.scrollTop();

        sections.each(function () {
            var sectionTop = $(this).offset().top - 50; // Adjust offset if necessary
            var sectionBottom = sectionTop + $(this).outerHeight();

            var id = $(this).attr("id");
            var menuLink = $(".side-menu a[href='#" + id + "']");

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $(".side-menu a").removeClass("active");
                menuLink.addClass("active");
            }

            // Special case: Handle the Home section when scrolling back to the top
            if (scrollPosition < 100) { // Adjust threshold for when Home becomes active
                $(".side-menu a").removeClass("active");
                $(".side-menu a[href='#home']").addClass("active");
            }
        });
    });
});

// Page Loader
$('#preloader').fadeOut('slow', function () {
    $(this).remove();
});


//  Get the ID (remove #)
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID (remove #)
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    });
}); 


	// ===== Scroll to Top ==== 

        // Show the button when scrolled 100px down
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#totop').fadeIn();
            } else {
                $('#totop').fadeOut();
            }
        });
    
        // Scroll to top when button is clicked
        $('#totop').click(function() {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

	
// Wow Animations
new WOW().init();

// Timer
var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/* magnificPopup */
$('.img-zoom').magnificPopup({
	type: 'image',
	gallery:{
	  enabled:true
	}
	// other options
  });

  $('a[href="#search"]').on('click', function(event) {                    
	$('#search').addClass('open');
	$('#search > form > input[type="search"]').focus();
});            
$('#search, #search button.close').on('click keyup', function(event) {
	if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
		$('#search').removeClass('open');
	}
});   


/*----------------------------
	Sticky Nav Js
	---------------------------- */
	var nav = $('.top-bar , .mob-sticky');
	var scrolled = false;
	$(window).scroll(function () {
		if (120 < $(window).scrollTop() && !scrolled) {
			nav.addClass('sticky_menu animated fadeInDown').css({ 'margin-top': '0px' });
			scrolled = true;
		}
		if (120 > $(window).scrollTop() && scrolled) {
			nav.removeClass('sticky_menu animated fadeInDown').css({ 'margin-top': '0px' });
			scrolled = false;
		}
	});

	
    /*------------------------------------------------------------------
    	theme color change
    ------------------------------------------------------------------*/

	var themeSettings = $(".theme-settings").find(".theme-color");
themeSettings.on('click', function () {
    var val = $(this).attr('data-color');
    $('#style_theme').attr('href', 'css/' + val + '.css');

    themeSettings.removeClass('theme-active');
    $(this).addClass('theme-active');

    // Change the first logo color
    var logo1 = $('#logo1');
    logo1.removeClass(); // Remove all previous logo classes
    logo1.addClass('logo-' + val); // Add the new logo class based on data-color

    // Change the second logo color
    var logo2 = $('#logo2');
    logo2.removeClass(); // Remove all previous logo classes
    logo2.addClass('logo-' + val); // Add the new logo class based on data-color

    // Change the Footer logo color
    var logo3 = $('#footer-logo');
    logo3.removeClass(); // Remove all previous logo classes
    logo3.addClass('logo-' + val); // Add the new logo class based on data-color

    // Change the Arrow color
    var arrow = $('#arrow-img');
    arrow.removeClass(); // Remove all previous logo classes
    arrow.addClass('arrow-' + val); // Add the new logo class based on data-color

    // Change the Arrow color
    var arrow2 = $('#arrow-img2');
    arrow2.removeClass(); // Remove all previous logo classes
    arrow2.addClass('arrow-' + val); // Add the new logo class based on data-color

    return false;
});

$(".theme-click").on('click', function () {
    $("#switcher").toggleClass("active");
    return false;
});

var theYear = new Date().getFullYear();
$('#current-year').html(theYear);
	
	
 });
 

 
 
 