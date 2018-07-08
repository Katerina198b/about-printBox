var screenWidth,
    screenHeight;

function start () {

    resize();
    window.addEventListener('resize', resize);

     var
        tlContent    = setTimelineContent(),
        tlGlobal     = new TimelineMax();

    tlGlobal.set(document.querySelector('.content'), {alpha: 1});
    tlGlobal.add(tlContent);
    tlGlobal.play();

};

function resize () {
    screenWidth  = document.documentElement.clientWidth,
    screenHeight = document.documentElement.clientHeight;
};


function setTimelineContent () {
    var tl = new TimelineMax();
    tl.set(document.querySelector('.underline'), {width: 0});
    tl.staggerFromTo(document.querySelectorAll('.letter'), 0.9, {'font-size': 0, alpha: 0}, {'font-size': '40px', alpha: 1, ease: Expo.easeInOut}, 0.08);
    tl.fromTo(document.querySelector('.underline'), 0.6, {width: 0, alpha: 0}, {width: 260, alpha: 1, ease: Sine.easeOut});

    return tl;
}


start();


// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});