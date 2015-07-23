// var timeOfDay = 9;

// if (timeOfDay < 12) {
//     console.log('eat your damn breakfast!');
// } else if (timeOfDay < 15) {
//     console.log('eat dat sandwich!');
// } else if (timeOfDay > 17) {
//     console.log('eat da dinnerz yo!');
// }



// var pluralize = function(string) {
    // var plString = string.slice(-1);
    // var plString2 = string.slice(-2);

    // if (plString == 'y') {
    //     console.log(string.substring(0, string.length -1) + 'ies');
    // } else if (plString == 's' || plString == 'x' || plString == 'z' || plString2 == 'sh' || plString2 == 'ch') {
    //     console.log(string + 'es');
    // } else {
    //     console.log(string + 's');
    // }

    // var y = (/y$/).test(string);
    // var s = (/s$/).test(string);
    // var x = (/x$/).test(string);
    // var z = (/z$/).test(string);
    // var sh = (/sh$/).test(string);
    // var ch = (/ch$/).test(string);


    // if (y) {
    //     console.log(string.substring(0, string.length -1) + 'ies')
    // } else if (s || x || z || sh || ch) {
    //     console.log(string + 'es');
    // } else {
    //     console.log(string + 's');
    // }

//     if ((/(x|s|sh|ch|z)$/).test(word)) {
//         console.log(word + 'es');
//     } else if ((/y$/).test(word)) {
//         console.log(word.replace(/y$/, 'ies'))
//     } else {
//         console.log(word + 's')
//     }

// }

// pluralize('puppy');
// pluralize('dress');
// pluralize('farm');
// pluralize('fuzz');
// pluralize('fish');
// pluralize('watch');

var test = true;
var testfalse = false

if (test && testfalse || test){
    console.log(test);
} else { console.log(testfalse);}

