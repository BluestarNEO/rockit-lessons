var objLiteral = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    vehicle: {
        type: 'Batmobile'
    },
    nickname: 'Batman',
    greet: function(who, useFullName) {
        var name = useFullName ? this.fullName() : this.nickname;

        return 'Hello, ' + who + '. I am ' + name;
    },
    drive: function() {
        return this.nickname + ' jumps in the ' + this.vehicle.type + '\nZoom Zoom!!';
    },
    logThis: function() {
        console.log(this);
    },    
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(objLiteral.fullName());
console.log(objLiteral.greet('Catwoman', false));
console.log(objLiteral.drive());

// var objLiteral2 = {
//     firstName: 'Clark',
//     lastName: 'Kent',
//     vehicle: {
//         type: 'Cape'
//     },
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// var objLiteral3 = {
//     firstName: 'David',
//     lastName: 'Banner',
//     vehicle: {
//         type: 'Purple Pants'
//     },
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// var objLiteral4 = {};

// objLiteral4.fullName = function() {
//     return this.firstName + ' ' + this.lastName;
// }

// objLiteral4.firstName = 'Greatest';
// objLiteral4.lastName = 'Ever';
// objLiteral4.vehicle = {};
// objLiteral4.vehicle.type = 'Rambo';

// console.log(objLiteral.fullName());
// console.log(objLiteral2);
// console.log(objLiteral3);
// console.log(objLiteral4);

