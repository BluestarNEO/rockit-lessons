var App = App || {};

App.Models.User = Backbone.Model.extend({
  url: function() {

    var base = 'http://localhost:3000/users/';

    if (this.isNew()) {
      return base;
    } else {
      return base + this.id;
    }

    // if(this.isNew()) return base;
    // return base + this.id;

  }

});




// user.fetch().done(function() {
//   console.log(user);
// });