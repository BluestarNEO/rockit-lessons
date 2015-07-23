$(function() {

var $div = $('<div>', {class: 'foobar'});
var $ul = $('<ul>');
var $liItem = $('<li>', {class: 'item'});
var $par = $('<p>', {text:'lorem'});

$('body').append($div.append($ul.append($liItem.append($par), $liItem.clone(), $liItem.clone(), $liItem.clone(), $liItem.clone(), $liItem.clone())));
});