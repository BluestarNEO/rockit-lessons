console.log("I'm from the external");

// var str1 = 'THIS';
// var str2 = 'IS';
// var str3 = 'JAVASCRIPT!';

// var x = 3;
// var y = 4;

// console.log("Addition: " + (x + y));
// console.log("Multiplication: " + x * y);
// console.log("Division: " + x / y);
// console.log("Subtraction: "  + (x - y));
// console.log("Modulus: " + x % y)
// console.log(str1 + " " + str2 + " " + str3);

// for (var i = 1; i <= 100; i++) {
//     if ((i%3 == 0) && (i%5 == 0)) {
//         console.log("fizzbuzz");
//     } else if (i%3 == 0) {
//         console.log("fizz");
//     } else if (i%5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     msg = "";
//     if (i%3 == 0) {
//         msg = "fizz";
//     }

//     if (i%5 == 0) {
//         msg += msg + "buzz";
//     }

//     if(msg) {
//         console.log(msg);
//     } else {
//         console.log(i);
//     }
// }

// var x = 3;

// {
//     var x = 2;
//     console.log(x);
// };
// console.log(x);

var sum = add(3,2);

console.log('this is before ' + sum);

function add(x, y) {
    var z = x + y;
    return z;
}
