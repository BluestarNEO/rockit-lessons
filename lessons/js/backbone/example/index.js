var App = App || {}

App.Models = {};
App.Views = {};
App.Collections = {};


$(function() {

  App.Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "users/": "getUsers",
      "user/:id/save(/)": "saveUser",
      "user/:id/delete(/)": "deleteUser",
      "accounts/": "getAccount",
      "account/:id/edit": "editUser",
      "profile/": "getProfile",
      "*actions": "defaultRoute"
    }
  });

  // initiate the router
  App.router = new App.Router;


  App.router.on('route:index', function() {
    console.log('Home Page');

    $('main').empty();
  })

  App.router.on('route:saveUser', function(id) {
    console.log('save');

  //   var user = new App.Models.User();

  //   user.set({name: "Keith", age: 36});
  //   user.save();
  // });

    // var user = new App.Models.User({

    // 'name': 'Brad',
    // 'hobby': 'Going to Philly\'s'

    // }); 

    // user.save();

    var user = new App.Models.User(id); 

    user.save();
  });

  App.router.on('route:deleteUser', function(id) {

    var user = new App.Models.User({id: id});
    user.destroy();

  });

  App.router.on('route:getUsers', function(actions) {

    var users = new App.Collections.User();
    users.fetch().done(function() {
      console.log(users.get(1).get('name'));
    });

    console.log('check');

    console.log(App.Views.listUsers);
    App.Views.listUsers.render();
  });

  App.router.on('route:getAccount', function(id) {
    console.log('Get Account');
    $('main').empty();
  });

  App.router.on('route:editUser', function(id) {
    App.Views.editUser.render(id);
  })

  App.router.on('route:getProfile', function(id) {
    console.log('Get Profile');
    $('main').empty();
  });

  App.router.on('route:defaultRoute', function(actions){
    console.log('Error 404');
    // $('main').html('<h1>404</h1>(you suck!)')

    console.log(App.Views.errorView);
    App.Views.errorView.render();
  })

  Backbone.history.start();

});










































// var model = new Backbone.Model;

// console.log(model);

// model.set('id', 3);
// model.set({ id: 5, name: 'Kevin' });

// model.get('id');

// var Animal = Backbone.Model.extend({
//   defaults: {
//   eyes: 6,
//   teeth: 2,
//   limbs: 3,
//   tail: true
//   }
// })

// var fred = new Animal({
//   eyes: 18,
//   tail: false,
//   limbs: 42
// });

// var Snake = Animal.extend({
//     eyes: 2,
//     limbs: 0,
//     tail: true,
//     tongue: 'forked',
//     venomous: true,
//     length: '8m'
// })


// var gardenSnake = new Snake({
//   length: '20cm',
//   venomous: false
// })

// console.log(fred.toJSON());
// console.log(gardenSnake.toJSON());

// var User = Backbone.Model.extend({
//   defaults: {
//     age: 22
//   },
//   urlRoot: 'http://localhost:3000/users/',
//   url: function () {
//     return this.urlRoot + this.id
//   }
// })

// var user = new User({ id: 1 });

// user.fetch().done(function(userData) {
//   console.log(user.toJSON())  
// })