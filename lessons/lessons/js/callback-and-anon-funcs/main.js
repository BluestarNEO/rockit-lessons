// function foo(callback) {
//     callback('done');
// }

// foo(bar);

// function bar(str) {
//     console.log(str);
// }

// function dominos(order, deliver) { //deliver is callback function
//     // do this
//     // do this
//     // do this

//     deliver(order)
// }

// dominos('order is here!', knockOnMyDoor);

// function knockOnMyDoor(myPizza) {
//     console.log(myPizza);
// }


// function uber(pickup) {
//     // stuff
//     // more 
//     pickup();
// }

// function pickMeUp(str){
//     console.log('pick me up!');
// }

// uber(pickMeUp);

// function uber(pickup){
//     // do stuff
//     pickup();
// }
 
// uber(function() {
//     console.log('dude, I\'m wasted. I don\'t remember where I live')
// })

function foo(callback) {
    setTimeout(function() {
        callback('World')
    }, 2000)
}

foo(function(str) {
    console.log('Hello ' + str);
})