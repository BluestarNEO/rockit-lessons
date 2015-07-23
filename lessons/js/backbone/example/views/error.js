var ErrorView = Backbone.View.extend({
  el: $('main'),
  render: function(err) {
    this.$el.html('<h1 style="font-size:100px;">There was an ' + err  + ' error</h1>');
  }
});

App.Views.errorView = new ErrorView;