// use top 2 selectors unless supporting older versions of IE
document.querySelector('.hero'); //only returns the first element found
document.querySelectorAll('div'); // returns an Array of everything matching

document.getElementById('myIdForSomeElement'); // returns exactly one element
document.getElementsByTagName('div'); // returns all matching elements
document.getElementsByClassName('myClassForSomeElement'); // every matching element

var el = document.querySelector('.hero');

el.innerHTML = '<div></div>'
el.setAttribute('title', 'My Awesome Title');