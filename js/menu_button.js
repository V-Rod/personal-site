/**
 * Created by V-Rod on 12/19/16.
 */
$(document).ready(function() {
    $('.plus-btn').click(function () {
        $('body').toggleClass('menu-open');
    });

    $('#home').click(function () {
        $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    });


})();