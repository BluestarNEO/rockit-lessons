var EditUser = Backbone.View.extend({
  el: $('main'),
  initialize: function() {
    var tmplString = $('#edit-user').html();
    this.tmpl = Handlebars.compile(tmplString);
  },

  events: {
    'click button': 'buttonClick'
  },

  buttonClick: function() {
    var name = $('#name').val();
    var hobby = $('#hobby').val();

    console.log(name + ' and ' + hobby);

    var user = new App.Models.User({name: name, hobby: hobby }); 

    user.save();


    return false;
  },

  render: function(userId) {
    var _this = this;
    var user = new App.Models.User({ id: userId })

    console.log(user);

    user.fetch().done(function(userData) {
      console.log(userData);

      _this.$el.html(_this.tmpl(userData))
    })

  }
});

App.Views.editUser = new EditUser;

