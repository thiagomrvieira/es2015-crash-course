// Object Shorthand

// function getPerson() {
//     let name = 'Thiago';
//     let age = 34;

//     return { 
//         name, 
//         age,
        
//         //  ES5
//         // greet: function () { 
//         //     return 'Hello, ' + this.name;
//         // }
        
//         //  ES6
//         greet: () => `Hello, ${name}`

//     };
// }

// alert(getPerson().greet());


// OBJECT DESTRUCTURING
// let data = {
//     results: ['foo', 'bar'],
//     count: 30
// }

// ES5
// let results = data.results;
// let count = data.count
// ES6
// let { results, count } = data;

// console.log(results, count);


// OBJECT DESTRUCTURING AS A FUNCTION ARGUMENT

function greet({name, age}) {
    console.log(`my name is ${name} and i am ${age} years old`);
}

greet({
    name: 'Thiago',
    age: 34
});