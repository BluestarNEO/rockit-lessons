$(function() {
    $('div').on('click', function() {
        console.log('Hi');
        console.log($(this).text());
    });

    $('span').on('mouseover', function() {
        console.log($(this).text());
    })

    $('.textbox').on('keydown', function() {
        console.log('Keydown fired');
    })

    $('.textbox').on('keyup', function() {
        console.log('Keyup fired');
    })

    $('.textbox').on('focus', function() {
        $('.textbox').addClass('fancy');
    })

    $('.textbox').on('blur', function() {
        $('.textbox').removeClass('fancy');
    })

    $('.submit-btn').on('click', function() {
        console.log('Submitted');
    })

    $('.textbox').on('keydown', function(e){
        if(e.which == 69) {
            return false;
        }
    })
});