function showUserDetails() {
    var name = $(this).text();
    alert(name);
}

function generateHtml(user, msg) {
    var outerDiv = $('<div>', {
        'class': 'logline'
    })

    var username = $('<div>', {
        'class': 'username',
        text: user
    })

    username.click(showUserDetails);

    var message = $('<div>', {
        'class': 'message',
        text: msg
    })

    var html = outerDiv.append(username, message);

    return html;
}


$(function() {
    $('#btn').click(function() {
        // var $nameInput = $('#nameInput');
        var $textInput = $('#textInput');
        var username = $('#nameInput').val();
        var message = $('#textInput').val();

        $('#chatlog').append(generateHtml(username, message));

        // $nameInput.val('');
        $textInput.val('');

        return false;
    })

    $('btn').on('keydown', function(e){
        if(e.which == 13){
            var $nameInput = $('#nameInput');
            var $textInput = $('#textInput');
            var username = $('#nameInput').val();
            var message = $('#textInput').val();

            $('#chaglog').apgenerateHtml(username, message);

            return false;
        }
    })
})