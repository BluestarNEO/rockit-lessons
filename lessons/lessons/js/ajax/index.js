"use strict";

//http://59607da8.ngrok.com/

$(function() {

    // $(document).on('click', function() {
    //     // $.get('foo.json');


    //     // $.ajax({
    //     //     method: 'POST',
    //     //     cache: false,
    //     //     data: {},
    //     //     dataType: 'json' 
    //     // })

    // // do this on all ajax
    // $.ajaxSetup({
    //         method: 'POST',
    //         cache: false,
    //         data: {},
    //         dataType: 'json' 
    //     })

    //     $.post('path', {}).done();
    // });

    // $.ajax({
    //     url: 'http://59607da8.ngrok.com/users',
    //     type: 'POST',
    //     data: {
    //         id: 36,
    //         img: "keith.png",
    //         handle: "@BluestarNEO",
    //         realName: "Keith Wasielewski"
    //     }
    // }).then(function(data) {
    //     console.log(data);
    // })

// $.ajax({
//         url: 'http://59607da8.ngrok.com/users/0',
//         type: 'PUT',
//         data: {
//             id: 36,
//             img: "keith.png",
//             handle: "@BluestarNEO",
//             realName: "Keith Wasielewski"
//         }
//     }).then(function(data) {
//         console.log(data);
//     }).fail(function(error) {
//         console.log(error);
//     }).always(function() {
//         console.log('AJAX is done man');
//     })
    // })

// $.get('http://59607da8.ngrok.com/tweets').done(function(data) {
//     console.log(data);

//     $('body').append().html('<h1>' + data[1].message + '</h1>');

// });

    // $.post('http://59607da8.ngrok.com/tweets', {
    //     id: Date.now() + 36,
    //     userId: 36,
    //     message: "I didn't do it Richi!"
    // }).done(function(data) {
    //     console.log(data);
    // }).fail(function(error) {
    //     console.log(error);
    // })

// $.get('http://59607da8.ngrok.com/tweets')
//     $.getJSON('http://59607da8.ngrok.com/tweets').done(function(data) {
//     data.forEach(function(tweet){
//         console.log(tweet.message);
//         $('body').append($('<div>').text(tweet.message));
//     })
// })

// $.post('http://59607da8.ngrok.com/tweets', {
//     id: 090288,
//     userId: 36,
//     message: 'thunder... Thunder... THUNDERCATS HOOOOOOOOOOOOO!'})
//     .done(function(data) {
//         console.log(data);
//     });

// $.ajax({
//     url: 'http://59607da8.ngrok.com/tweets/1436292066373',
//     type: 'PUT',
//     data: {
//         id: 1436292066373,
//         userId: 36,
//         message: 'I might have done it Richi'
//     }
// })

// $.post('http://59607da8.ngrok.com/replies', {
//     id: 1337,
//     tweetId: 5
// })

// $.post('http://59607da8.ngrok.com/users', {
//     id: 2093409384092904,
//     handle: '@BluestarNEO',
//     realName: 'Keith Wasielewski',
//     img: 'awesomeKeith.png'
// })

    // $.get('http://59607da8.ngrok.com/db').done(function(data) {
    //         data.forEach(function(tweet) {
    //             console.log(tweet);
    //         });
    // })

    $.getJSON('http://59607da8.ngrok.com/users')
        .done(function(users){
            users.forEach(function(user) {
                $.getJSON('http://59607da8.ngrok.com/users/' + user.id + '/tweets')
                    .done(function(userTweets) {
                        console.log(user.handle);
                            userTweets.forEach(function(userTweet) {
                                console.log(userTweet.message);
                })
            })
        })
    })

        $.getJSon('http://59607da8.ngrok.com/users')
            .done(function(tweets) {
                tweets.forEach(function(tweet) {
                    $.getJSON('http://59607da8.ngrok.com/users/' + tweet.userId)
                        .done(function(tweetUser) {
                            console.log('tweet ' + tweet.id + ' belongs to ' + user.handle);
                            tweet.user = tweetUser;

                            // renderTWeet(tweet);
                        })
                })

            })

})