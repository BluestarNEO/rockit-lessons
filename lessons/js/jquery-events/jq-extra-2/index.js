$(function() {

    // $('div').con('click', function() {
    //     if($(this).is('highlight')) {
    //         $(this).removeClass('highlight');
    //     } else {
    //         $(this).addClass('highlight');
    //     }
    // });

    $('body').on('click', 'div', function() {
        $(this).toggleClass('highlight');
    });

    $('button').on('mouseover', function() {
        $('<div>').append('New Div').appendTo('body');
    })


});