$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        $('#contactForm').fadeOut(100, function() {
            $('#successMessage').fadeIn(100);
        });
            
    });

    $('#backToForm').on('click', function() {
        $('#successMessage').fadeOut(100, function() {
            $('#contactForm').fadeIn(100);
        });

        $('#contactForm').trigger('reset');
    });

    $('.back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 1500);
    });

    $('#hamburger').on('click', function() {
        $('#menu-mobile').toggleClass('active');
        $('.dot').toggleClass('active');

    });
});
