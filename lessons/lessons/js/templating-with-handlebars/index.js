var generateUser;

$(function() {

    // var source = $('#entry-template').html();
    // var template = Handlebars.compile(source);

    // var context = {title: "My New Post", body: "This is my new post!"};
    // var html = template(context);

    // console.dir(source);
    // console.dir(context);
    // console.dir(html);

    // for (var i = 0; i < 5; i++){
    //     $('body').append(html);
    // }
  
    // Challenge

    // var source = $('#challenge-template').html();
    // var template = Handlebars.compile(source);

    // var context = {href: "http://www.google.com", title: "title"};
    // var html = template(context);

    // $('body').append(html);

    // Challenge 2

    // var source = $('#challenge2-template').html();
    // var template = Handlebars.compile(source);

    // var links = [
    //     {href: "http://google.com", title: "Google"},
    //     {href: "http://www.amazon.com", title: "Amazon"},
    //     {href: "http://www.rockitbootcamp.com", title: "Rockit"}
    //     ];


    // for (var i = 0; i < links.length; i++){
    //     var html = template(links[i]);

    //     $('body').append(html);
    // }

    // Challenge 3

   // var source = $('#challenge3-template').html();
   // var template = Handlebars.compile(source);

   // var affiliates = [
   //      {href: "http://6pm.com", class1: "nav_a", title1: "6pm", class2: "navFooterDescText", title2: "Score deals<br> on fashion brands"}
   //      ];  

   //  for (var i = 0; i < affiliates.length; i++) {
   //      var html = template(affiliates[i]);

   //      $('body').append(html);
   //  }


    // Challenge 4

    // var source = "This is my {{{message}}}"
    // var template = Handlebars.compile(source);

    // var context = {message: "I <b>Love</b> it!"};

    // var html = template(context);
    // $('body').append(html);

    // var tmpl = $('#user-template').html();
    // var userTmpl = Handlebars.compile(tmpl);

    // generateUser = function (userData) {
    //     return userTmpl(userData);
    // }

    // $('button').on('click', function() {
    //     // console.log('click');

    //     var fields = $('form').serializeArray();
    //     // console.log(fields);

    //     var simpleFields = {};
    //     fields.forEach(function(field) {
    //         simpleFields[field.name] = field.value;
    //         console.log(simpleFields);
    //     })

    //     $('body').append(generateUser(simpleFields));

    //     return false;
    // });

    // rewrite

    // var tmpl = $('#user-template').html();
    // var userTmpl = Handlebars.compile(tmpl);

    // generateUser = function(userData) {
    //     return userTmpl(userData);
    // }

    // $('button').on('click', function() {
    //     var fields = $('form').serializeArray();
    //     var simpleFields = [];

    //     fields.forEach(function(field) {
    //         if(simpleFields[field.name]) {
    //             simpleFields[field.name] = [].concat(simpleFields[field.name], field.value);
    //             console.log(simpleFields);
    //         } else {
    //             simpleFields[field.name] = field.value;
    //             console.log("Else " + simpleFields);
    //         }

    //     });

    //     $('body').append(generateUser(simpleFields));

    //     return false;
    // });

    // rewrite

    var tmpl = $('#user-template').html();
    var userTmpl = Handlebars.compile(tmpl);

    generateUser = function(userData) {
        return userTmpl(userData);
    }

    $('button').on('click', function() {
        var fields = $('form').serializeArray();
        var simpleFields = [];

        fields.forEach(function(field) {
            if(simpleFields[field.name]) {
                simpleFields[field.name] = [].concat(simpleFields[field.name], field.value);
            } else {
                simpleFields[field.name] = field.value;
            }
        });

        $('body').append(generateUser(simpleFields));

        console.log(generateUser(simpleFields);

        return false;
    })


})