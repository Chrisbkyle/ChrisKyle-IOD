const user = {
    firstName: "naveed",
    lastName: "alyas",
    age: 20,
    isStudent: false,
    fullname: function() { return this.firstName + " " + this.lastName}, 
    sayHi: function () { console.log("Hi "+ this.fullname())},
    sayHiMethod() { console.log("Hi, greetings to "+ this.fullname())}
}



console.log(user); 

const anotherUser = Object.create(user);

console.log(anotherUser); 

anotherUser.firstName = "Chris";
anotherUser.lastName ="Kyle";
anotherUser.age = 21;

console.log(anotherUser);
console.log(user);