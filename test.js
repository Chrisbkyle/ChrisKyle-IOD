// const user = {
//     firstName: "naveed",
//     lastName: "alyas",
//     age: 20,
//     isStudent: false,
//     fullname: function() { return this.firstName + " " + this.lastName}, 
//     sayHi: function () { console.log("Hi "+ this.fullname())},
//     sayHiMethod() { console.log("Hi, greetings to "+ this.fullname())}
// }



// console.log(user); 

// const anotherUser = Object.create(user);

// console.log(anotherUser); 

// anotherUser.firstName = "Chris";
// anotherUser.lastName ="Kyle";
// anotherUser.age = 21;

// console.log(anotherUser);
// console.log(user);
// const n = 1.23456;

// console.log(n.toFixed(2));

// const str = "hello world";
// str.toUpperCase() ===  (new String(str)).toUpperCase();

// console.log(str.toUpperCase());
// console.log(String());

// let text = new String("Hello World!");
// let result = text.valueOf()

// console.log(text.valueOf()); 

// const arr = ["T", "e", "s", "t", "i", "n", "g", " ", "a", "r", "r", "a", "y"];

// console.log(arr);

// let newarr = arr.slice(+8);

// console.log(newarr);


// multiarr = [
//     [],
//     [],
//     [],
// ]

// function fiftyThirtyTwenty(ati) {
// 	let fifty = (ati) => (50 / 100) * ati;
// 	let thirty = (ati) => (30 / 100)  * ati;
// 	let twenty = (ati) => (20 / 100) * ati;
	
// 	let budget = {
// 		needs: this.fifty,
// 		wants: this.thirty,
// 		savings: this.twenty
// 	};
	
// 	return budget;
// }



// console.log(fiftyThirtyTwenty(100));


// const person = {
//     fName: "Chris",
//     lName: "Kyle",
//     age: 26,
//     profession: "chef",
//     fullName() {
//         return this.fName +" " + this.lName;
//     }
// }

// const newPerson = new Person();

// function Person() {

//     let first = prompt("What is your first name?");
//     let last = prompt("What is your last Name?");

//     this.fName = first;
//     this.lName = last;
// }



// console.log(newPerson);

list = [10, 20, 35, 40, 45, 50];
// list = ['ab', 'cd', 'ef', 'gh', 'ij'];
sumOfList = 0;

// for (let count = 0; count < list.length; count++) {
//     sumOfList = sumOfList + list[count];
//     console.log('my calculation: ' + list[count] * 10);
// }


// list.forEach((val, index, mylist) => {
//     sumOfList = sumOfList + val;
//     console.log('my calculations: '+ val * 10);
//     console.log(index);
//     console.log(mylist); 
// })


// console.log(list.find((val) => {return index == 35})); 
    // console.log(numberFound);
    // console.log(index);
    // console.log(mylist); 


// listDiscount = list.map((element) => {return (element * .90)})

// console.log(listDiscount);

// let divByTen = list.filter(val => {return val % 10 == 0});
// console.log(divByTen); 


console.log(list.slice(1, 3));
console.log(list.slice(-3, -1));
