var ListUserView = Backbone.View.extend({
  el: $('main'),
  render: function() {
    var tmplString = $('#user-list').html();
    var tmpl = Handlebars.compile(tmplString);
    var _this = this;

    App.Collections.user.fetch('id').done(function() {
      _this.$el.html(tmpl(userCollection.toJSON()));
    })
  }
});

App.Views.listUsers = new ListUserView;