// var myArray = [1,2,3,4,5,6,7,8,9,0];

// myArray.forEach(function(item) {
//     console.log(item);
// })

// myArray.forEach(function(item) {
//     console.log(item + 1);
// })

// while
// var myArray = [1,2,3,4,5,6,7,8,9,0]
// var len = myArray.length;

// while (len--) {
//     console.log(myArray[len])
// } 

// var i = 0

// while(i < len) {
//     console.log(myArray[i++])
// }

// var batArray = ['Batman', 'sees', 'Catwoman', 'and', 'runs', 'away']

// var batLen = batArray.length

// var i = 0

// while (i < batLen) {
//     console.log(batArray[i])
//     i++
// }

// var obj = {
//     nickname: 'Batman',
//     firstName: 'Bruce',
//     lastName: 'Wayne'
// }

// var myArray = [];

// for (var key in obj) {
//     // first iteration in key = 'nickname'
//     myArray.push(key)
//     console.log(key + ' = ' + obj[key]);
// }

// console.log(myArray);

// var users = [];

// var person1 = {
//     firstName: 'Keith',
//     lastName: 'Wasielewski',
//     age: 16
// }

// var person2 = {
//     firstName: 'Troy',
//     lastName: 'Mullaney',
//     age: 21
// }

// var person3 = {
//     firstName: 'Duane',
//     lastName: 'Winkel',
//     age: 30
// }

// users.push(person1, person2, person3);

// console.log(users);

// for (var index in users) {
//     console.log(users[index].firstName);
// }

var users = []

var newUsers = function(firstname, lastname, age) {
    var person = {
        firstName: firstname,
        lastName: lastname,
        age: age
    }

    users.push(person);
}

newUsers('Bruce', 'Banner', 33);
newUsers('Donna', 'Summers', 25);
newUsers('Clark', 'Kent', 33);

for (var index in users) {
    console.log(users[index].firstName);
}

console.log(users);