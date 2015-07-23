$(function() {

    // function generateDiv() {
    //     return $('<div>');

    //     return $('<div><button>Click</<button></div>');
    // }

    // $('main').on('click', 'button', function() {
    //     console.log('I\'ve been clicked!');

    //     $('main').append(generateDiv());

    //     $('main').append(generateDiv());
    // })

    // $('main').delegate();


    function generateDiv() {
        return $('<div><button>Click Me</button></div>');
    }

    $('main').on('keyup', 'text', function(e) {
        if (e.which == 13) {
            $('main').append(generateDiv());
        }
    })


})