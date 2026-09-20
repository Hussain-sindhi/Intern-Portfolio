let StudentName = "Mohan"
const age = 20;
let math = 85;
let Science = 72;
let English = 90;
let isPercent = true;
let Total = math + Science + English;

// percentage
let Percentage = Total/300*100;
console.log(Percentage);

// Check Eligibility for Exam
if(age >= 18 && isPercent === true){
    console.log("Eligible for exam");
    } 
    
    // Grade of Student
    if (Percentage >= 90){
        console.log("A");
        }
        
        else if (Percentage >= 80){
            console.log("B");
            }
            
            else if (Percentage >= 70){
                console.log("C");
}

// else{
    //     console.log("F")
// }

// Ternary Operator:
let result = Percentage >= 40 ? "Pass" : "Fail";
console.log(result);


// let name = "Arjun"
// let a = Number(name);
// console.log(a); //Output: NaN(Not a Number)

console.log(Number("")); // Output: 0

console.log(Number(true));  // Output: 1
console.log(Number(false));  // Output: 0

let person = {
    name: "Arjun",
    age: 20,
    }
    
    person.name = "Mohan"
    console.log(person.name);
    
    
    let a = 6
    let b = 7
    console.log(a++); // Output: 6
    console.log(a);  // Output: 7
    console.log(++b); // Output: 8
    console.log(b);  // Output: 8
    console.log("6" -3); // Output: 3 bcz -3 convert string into number(implicit type conversion)

    
    
    function 
    let a, b;
    function add(a, b) {
        return(a + b);
    } 
    
    console.log(add(a=6, b=7));
    
    
    function total(maths, science, english) {
        return(maths + science + english);
    }
    
    function percentage(total, subjects) {
        return();
    }
    
    function Grade(percentage){
        if (Percentage >= 90){
            return("A");
            
        }
        
        else if (Percentage >= 80){
            return("B");
        }
        
        else if (Percentage >= 70){
            return("C");
        }
        else{
            return("Fail");
        
    }
}
console.log(Grade());


Arrow Fuction:
const add = (a, b) => {
    return a + b;
};
console.log(add(10,20));


// Array:
let Fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Guava", "Papaya", "Strawberry", "Grapes"]
console.log( Fruits.push("Mango"));
// Fruits.map();
// Fruits.reduce();
// Fruits.filter();
Fruits.length();
Fruits.pop();
Fruits.shift();
Fruits.unshift("Mango");


var i = 3;
function abc(){
    var i = 6;
    console.log(i);
}
console.log(i);


// Array methods 

let num = [1, 2, 3, 4]
console.log(num.indexOf(2));
console.log(num.includes(2));
console.log(num.indexOf(4));

let result = num.slice(1,2);
console.log(result);

console.log(num.splice(1,2));


console.log(num.splice(2,0,5,6));
console.log(num);

let mapResult = num.map(num => num+2)
mapResult = num.map(num => num*3)  
console.log(mapResult);

let filterResult = num.filter(num => num > 2) 
console.log(filterResult);

let findResult = num.find(num => num > 2)
console.log(findResult);

let reduceResult = num.reduce((acc, curr) => acc += curr)
console.log(reduceResult);

// console.log(num.reduce((a,b) => a+=b));
let arr = [1, 2, 3, 4]
let result = arr.reduce((total+Number, 0));
console.log(result);


// Spread operator:
let obj = {name: "Mohan", age: 25};
let new_obj = {...obj, city: "Hyderabad"};
console.log(new_obj);

// // Rest operator:
function add (...num) {
    console.log(num.reduce((total, n) =>  total+=n, 0));
}
add(1, 2, 3, 4);


let result = {name: "Rajju", age: 23, marks:[80,85,90]};
let {name, age, marks} = result;
console.log(`my name is ${name} and I am ${age} year old.`);


// 16/09/2026

setTimeout(() => {   // setTimeout is used to print the value of i after 2 sec (you mentioned)
console.log("Hello!");
}, 2000);

let i = 1;
setInterval(() => {   // setInterval is used to print the value of i every 1 sec (you mentioned)
console.log(i);
i++;
}, 1000);

// callback: a function that is passed as an argument to another function

function processOrder(order, callback){
    console.log(`Processing ${order}`);
    
    setTimeout(() => {
        console.log("Order processed");
        callback();
    }, 2000);
}

function sendNotification(){
    console.log("Notifiction sent");
}
processOrder("Pizza", sendNotification)


// closure:
function createCounter(){
    let count = 0;
    
    function inner(){
        count++;
        return count;
    };
    return inner;
    
}

// console.log(createCounter()());
// console.log(createCounter()());
// console.log(createCounter()());
const counter = createCounter();
console.log(typeof counter);

console.log(counter());
console.log(counter());
console.log(counter());



// 17/09/2026

// callback Hell: 
function getUser(callback) {
    setTimeout(() => {
        console.log("User Received");
        callback();
    }, 1000);
}

function getOrder(callback) {
    setTimeout(() => {
        console.log("Orders received");
        callback();
    }, 1000);
}

function getPayment(callback) {
    setTimeout(() => {
        console.log("Payment received");
        callback();
    }, 1000);
}

getUser(() => {
    getOrder(() => {
        getPayment(() => {                     // Callback Hell
        console.log("All done");
    });
});
});


// ------Promises----->

// function OrderFood() {
    return new Promise((resolve, reject) => {
        const restaurantOpen = false;
        setTimeout(() => {
            if (restaurantOpen) {
                resolve("Food is ready");
            } else {
                reject("Restaurant is closed");
        }
    }, 1000);
});

OrderFood()
.then((result) => {
    console.log(result);
    return result;
})

.then(() => {
    console.log("Arjun");
})

.catch((error) => {
    console.log(error);
});


// ------Async Await----->

function orderFood(){
    return new Promise((resolve, reject) => {
        const restaurantOpen = false;
        setTimeout(() => {
            if (restaurantOpen) {
                resolve("Food is ready");
            } else {
                reject("Restaurant is closed");
        }
    })
});
}

async function main(){
    try{
        console.log("Arjun");
        const result = await orderFood();
        console.log(result); 
    }catch(error){
        console.log(error);
    }
}
main();


// 18/09/2026
// Promises Methods:
// 1. Promise.all: all pass or fail
// 2. promise.allsetteled: all pass and fail shown
// 3. promise.race: return first result / whichever comes first
// 4. promise.any: 

function orderFood(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Food is ready")
        },3000)
    })
}

function orderPizza(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza is ready")
        },3000)
    })
}

function orderDrink(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Drink is ready")
        },1000)
    })
}

// promise all:
Promise.all([
    orderFood(),
    orderPizza(),
    orderDrink()
])

.then((result) =>{
    console.log(result);   
})
.catch((errir) =>{
    console.log(error);
})

// promise.allsetteled:
Promise.allsetteled([
    orderFood(),
    orderPizza(),
    orderDrink()
])

// promise.race:
Promise.race([
    orderFood(),
    orderPizza(),
    orderDrink()
])

// promise.any:
Promise.any([
    orderFood(),
    orderPizza(),
    orderDrink()
])


function getusers() {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

getUsers()
.then((response) => {
    return response.json();
})

.then((users) => {
    console.log(users);  
})

.catch((error) => {
    console.log(error);
})

// async await
async function main(){
    try{
        const response = await getusers();
        const result = await response.json
        console.log(result);
        
    }catch(error){
        console.log(error);
    }
    finally {
        console.log("Fetch successful");
        
    }
}
main();

// main in users
// shallow copy & deep copy 
// DOM