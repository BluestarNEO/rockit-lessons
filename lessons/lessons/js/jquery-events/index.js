$(function() {

    $tank = $('div.tank');

    $tank.on ('click', function(e) {
        console.dir(e);
        console.log('Boom!');
        console.log('Bam!');
    })

    $tank.on ('mouseover', function() {
        console.log('A Hit!');
    })

    $('.message').on('keydown', function(e) {

        if (e.which == 75) {
            console.log('KILL');
        } else if (e.which = 83) {
            console.log('SHOOT');
        }
        console.log('Hello... I\'m attacking you!');
    });

    $('.message').on('keyup', function(e) {
        $('.message').val('');
    })

    $('.message').on('keydown', function(e) {
        var currentTop = $('.tank').position().top;
        var currentLeft = $('.tank').position().left;

        if (e.which == 37) {
            $('.tank').css({'left': currentLeft - 15});
        } else if (e.which == 38) {
            $('.tank').css({'top': currentTop - 15});
        } else if (e.which == 39) {
            $('.tank').css({'left': currentLeft + 15});
        } else if (e.which == 40) {
            $('.tank').css({'top': currentTop + 15});
        }
    })

    $('.mine').on('click', function() {
        console.log($(this).text());
    })''

    
});