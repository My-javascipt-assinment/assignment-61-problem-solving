/*==================================== Question No 1 =========================================
regular expression : the forward slashes /.../ defines  regular expression in js. 
any thing in slashes is called patern for searching. 
\d is called metacharacter it means any digit from 0 to 9. 
.test( ) is a method of regular expresssion in javascript. it checks if a string matches 
the regex pattern , if matches returns true else false
======================================= Answer =====================================*/
// let str = 'hell0';
// let check = /\d/.test(str);
// console.log(check)


/*==================================== Question No 2 =========================================
.match( )
it is a js method that is used with regualar expression and it fetch all the values from string 
that we are fecthin and give in array .
case insensitive :  i is case insensitive in js
======================================= Answer =====================================*/
// let str = 'hello32';
// let check = str.match(/\d/g);
// console.log(check);
// let senten = '12A76j';
// let ans = senten.match(/[A-Z]/gi);
// console.log(ans)

/*==================================== Question No 3 =========================================
.split(/\s+/);
======================================= Answer =====================================*/
// function testing(){
//     let a = document.getElementById('input').value;
//     console.log(a.length);
//     let b = a.split(/\s+/);
//     console.log(b.length)
// }

/*==================================== Question No 4 =========================================
object is also data type and in object we store data  of any thing related , a collection 
of data related to a person or thing is called object , 
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 30,
//     designation : 'developer'
// }
// // delete obj.name
// // // let check = obj.hasOwnProperty('age')
// // let check = 'age' in obj;
// // console.log(check)
// // console.log(obj)

// for(key in obj){console.log(key, obj[key])}


/*==================================== Question No 5 =========================================
if we have an object, and we make a shallow copy of object by {...obj} or 
object.assign({},obj) and we change primitive data of copy than  there is no occuring 
changes in origional object but if we have non-primitive data (nested object a) and 
we make any changes in nested object data than our origional object is also changed, it is called
shallow copy.
======================================= Answer =====================================*/


// const student = {
//     name : 'Aziz',
//     teachderName : {name : 'Ahmed'}
// }
// console.log(student);
// // const copy = {...student}
// const copy = Object.assign({},student)
// copy.name = 'Hanif';
// copy.teachderName.name = 'Waseem'
// console.log(student);
// console.log(copy)




/*==================================== Question No 6 =========================================
json.parse(json.stringify(obj))/ structueClone(obj). deep copy of object is independent and whether we change primitive or nonprimitive data the origional 
object does not affected. 
======================================= Answer =====================================*/
// let obj = {name :'Aziz',
//     teacher :{city: 'Lahore'}
// }
// console.log(obj)
// let copy = JSON.parse(JSON.stringify(obj));
// copy.name = 'Allah Khel',
// copy.teacher.city = 'Mianwali'
// console.log(copy);
// console.log(obj)



/*==================================== Question No 7 =========================================
in the start of which function we see async it means this function returns us a promise  and 
we use await in asynce function, await means do wait till i complete task,
======================================= Answer =====================================*/
// const apiUrl = 'https://dummyjson.com/products';

// async function apiLearning(p) {const apiUrl = 'https://dummyjson.com/products';
//     try{let data = await fetch(apiUrl);
//         let realData = await data.json();
//         console.log(realData);
//         show(realData.products)
//     }
//     catch(err){console.log(err)}
    
// }
// apiLearning()

// let display = document.getElementById('display');
// function show(apiLearning){if(Array.isArray(apiLearning) && apiLearning.length > 0)
// {display.style.listStyle = 'none'
//     display.innerHTML = apiLearning.map((item)=>{return `
//     <li>${item.id} ${item.title}</li>`}).join('');
// }
// }


// async function apiLearning(){
//     const apiUrl =  'https://dummyjson.com/products';
//     try{let data = await fetch(apiUrl);
//     console.log(data);
// let realData = await data.json();
// console.log(realData.products)
// show(realData.products)}
//     catch(err){console.log(err)}
// }

// apiLearning()

// let display = document.getElementById('display');
// function show(apiLearning){
//     if(Array.isArray(apiLearning) && apiLearning.length > 0)
//     {
//         display.innerHTML = apiLearning.map((item)=>{
//             return(
//                 `<li>${item.id} : ${item.price}</li>`
            
//             )
//         })
//     }

// }


//  async function  apiLearning(){
//     const apiUrl =  'https://dummyjson.com/products';
//     try{
//         let data = await fetch(apiUrl);
//         console.log(data)
//         let realData = await data.json();
//         console.log(realData.products)
//         show(realData.products)

//     }
//     catch(error){
//         console.log(error)
//     }
// }
// apiLearning()

// function show(apiLearning){
//     let display = document.getElementById('display');
//     if(Array.isArray(apiLearning) && apiLearning.length >0){
//         display.innerHTML = apiLearning.map((item)=>{
//             return(
//                 `<li>${item.id} : ${item.title}</li>`
//             )
//         })
//     }
// }


/*==================================== Question No 8 =========================================
try and catch = in js when we are coding and we have a bit chances of any error 
occuring , than we write this code in try block and error is shown us in catch block and 
our all js file does not disturb
======================================= Answer =====================================*/

// try{let num = 5; 
// console.log(num.toUpperCase())}
// catch(eror){
//     console.log(eror)
// }
// console.log('programm is running')



/*==================================== Question No 9 =========================================
axios is a js library and by using it we can send api request to server and can get data 
from server
======================================= Answer =====================================*/
// "https://jsonplaceholder.typicode.com/posts" 
// const axiosApiCalling = async ()=>{
//     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//     try{
//         let data = await axios.get(apiUrl);
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// axiosApiCalling()




/*==================================== Question No 10 =========================================
promise is an object of js that is used to handle asynchronous task like api calling . 
promise has three states, pending, fulfilled,rejected, we can create promise by new Promise and in 
promise parameter we pass an executor function with two parameters, resolve and reject 
we get answer of promise in then and catch , then run when promise is succeeded and catch 
run when promise rejected 
======================================= Answer =====================================*/
// const learningPromise = new Promise((resolve,reject)=>{
//     const userInput = prompt('enter number');
//     if(userInput % 2 == 0){resolve('promise resolved')}
//     else{reject('promise rejected')}
// })

// .then((success)=>{
//     console.log(success)
// })

// .catch((error)=>{console.log(error)})
/*==================================== Question No 11 =========================================
settimeout is a builtin js function and it is used when we have to run functionality after some 
time delay , we pass a callback function and timeout inside its paramete, 
======================================= Answer =====================================*/
// console.log('bring water')
// setTimeout(() => {
//     console.log('bring tea')
    
// }, 3000);
// console.log('bring biscuits')


/*==================================== Question No 12 =========================================
setInterval is also js built in function and inside it we write a code that render repeatedly 
after some delay and it runs , till we ourselves dont stop it by clearIntervals()
======================================= Answer =====================================*/

// let stop = setInterval(() => {
//     console.log('i am setInterval')
    
// },2000);


// function stopping(){
//     clearInterval(stop)
//     clearInterval(clock)
// }

// let show = document.getElementById('showClock')
// let clock = setInterval(() => {
//    const h = new Date().toLocaleTimeString()
//    show.innerHTML = h
// }, 1000);

/*==================================== Question No 13 =========================================
new Map() is js built in method and using it we can store data to an object , 
we can store key and value pairs in object, by using new Map() we can keep name of property anyone 
even keywords of js ,like let var function ect
======================================= Answer =====================================*/
// let obj = new Map()
// console.log(obj)
// obj.set('name', 'Aziz');
// obj.set('age',30);
// obj.set('let','good');
// obj.set('()=>{}', 'function name')
// obj.clear()
// console.log(obj)
// console.log(obj.size)
// console.log(obj.has('name'));
// console.log(obj.keys())
// console.log(obj.values())
// console.log(obj.entries())




/*==================================== Question No 13 =========================================
the function that calls itself inside itself again and again until a base condition doesn't fulfilled
======================================= Answer =====================================*/
// function countdown(n) {
//   if (n === 0) {   // base case (stop condition)
//     console.log("Done!");
//     return;
//   }
//   console.log(n);
//   countdown(n - 1); // recursive call
// }

// countdown(5);



/*==================================== Question No 14 =========================================
closure function ; we create a parent function and inside parent function we create child 
function and child function uses parent funtion parameter values and variable of parent functon 
even var ,let , const
======================================= Answer =====================================*/
// function addition(m){
//     let n = 20;
//     return function(){
//         console.log(m + n)
//     }

// }
// let ans = addition(10);
// ans()





/*==================================== Question No 15 =========================================
filter is an arry method and it gives us all arry values that satisfy our condition 
, it does not modify our array 
======================================= Answer =====================================*/
// const fruits = ['apple','mango','orange','mango','banana','grapes','mango']
// let filter = fruits.filter((item)=>{
//     return item === 'mango'
// })

// console.log(filter)

// let obj = [
//     {name : 'Aziz',
//         designation : 'developer'
//     },
//     {name : 'Mohsin',
//         designation : 'SE'
//     },
//     {name : 'Munir',
//         designation : 'developer'
//     }
// ]

// let need = obj.filter((item)=>{
//     return(
//         item.designation === 'developer'
//     )
// })
// console.log(need)

/*==================================== Question No 16 =========================================
find() is an array /object method and it returns only first value or item of array or object 
that satisfies our condition, it gives only first elemen, if no item matches our condtion 
it returns undefinded
======================================= Answer =====================================*/
// const fruits = ['apple','mango','orange','mango','banana','grapes','mango']
// let filter = fruits.find((item)=>{
//     return item === 'mango'
// })

// console.log(filter)

// let obj = [
//     {name : 'Aziz',
//         designation : 'developer'
//     },
//     {name : 'Mohsin',
//         designation : 'SE'
//     },
//     {name : 'Munir',
//         designation : 'developer'
//     }
// ]

// let need = obj.find((item)=>{
//     return(
//         item.designation === 'developer'
//     )
// })
// console.log(need)



/*==================================== Question No 17 =========================================
forEach() array method is used to show data on dom /or console. 
like filter and find method we cant save forEach in variable
======================================= Answer =====================================*/
// const fruits = ['mango','apple','banaana','grapes']
// let display = document.getElementById('display')
// fruits.forEach((item,index)=>{
//     let li = document.createElement('li');
//     let liContent = document.createTextNode(item)
//     li.appendChild(liContent);
//     display.appendChild(li)
    
// })




/*==================================== Question No 18 =========================================
map is an array method and by using it we can apply a condition or changing to all the element 
of array, and we can get a modified array
======================================= Answer =====================================*/

// const arr = [1,2,3,4,5]
// const modifyArray = arr.map((Element)=>{
//     return Element * 2
// })

// console.log(modifyArray)

// let obj = [
//     {name :'Aziz',
//         age : 30
//     },
//     {name :'Umair',
//         age : 20
//     },
//     {name :'Waqar',
//         age : 20
//     }
// ]



/*==================================== Question No 19 =========================================
.some() is an array method and it check our array all elements and see that if any one 
item of array satisfies our applied condition if ok than it returns true else false
======================================= Answer =====================================*/
// const numbers = [1,,3,5,63,7,9,11,13]
// let check = numbers.some((item)=>{
//     return item % 2 == 0
// })
// console.log(check)




/*==================================== Question No 20 =========================================
findIndex search an array or object and give us a value that satisfies our condtion , it gives index of 
required item and in an object we can get the id of an object by using findIndex and we can 
delete it by splice
======================================= Answer =====================================*/
//  const user = [{id : 1,
//    name : 'Ahmed',
//    title : 'MERN Eng'
// },
// {id : 2,
//    name : 'Obaind',
//    title : 'Ui Ux Des'
// },
// {id : 3, 
//    name : 'Aziz',
//    title : 'Admin'
// },
// {id : 4,
//    name : 'Bilal',
//    title : 'MERN Eng'
// }]

// let target = user.findIndex((item)=>{
//     return item.id == 3
// })

// console.log(target)
// user.splice(target,1);
// console.log(user)
//  const names = ['Abid','Sana','Umer','Mubashir'];
//  let id = names.findIndex((item)=>{
//     return item == 'Umer'
//  })
// console.log(id);
// names.splice(2,1);
// console.log(names)
/*==================================== Question No 21 =========================================
spread operator is a javascript feature we use it 
for copy arary or object 
merge arrays or object 
add data in array or object 
======================================= Answer =====================================*/
// let arrOne = ['apple','mango'];
// let arrTwo = ['orange','grapes'];
// let newArr = arrOne.concat(arrTwo)
// // let newArr = [...arrOne,'carrot','banana',...arrTwo];

// console.log(newArr)
// let copyArr = [...newArr];
// console.log(newArr)

// let objOne = {name : 'Aziz'}
// let objTwo = {age : 30};
// let obj = {...objOne,...objTwo};
// obj = {...obj,desingation: 'developer',city : 'Karachi'}
// console.log(obj)
// let newObj = {...obj};
// console.log('new object: ',newObj)

// let number = [2,3,44,3,6,8];
// console.log(Math.max(...number))

/*==================================== Question No 22 =========================================
rest parameter : take multiple arguments of function by using ...rest and show them in 
an array is called rest parameter
======================================= Answer =====================================*/
// function abc(numOne,numTwo,...rest)
// {
//    console.log(rest)
//    console.log(numOne);
//    console.log(numTwo)

// }
// abc('Aziz','Fiaz','Mubashir','Haider','Umer','Firdos')



/*==================================== Question No 23 =========================================
we set a value in parameter and funcitn uses it , but when we pass value by argument 
fuction uses arguments value not default value
======================================= Answer =====================================*/
// function addition(a,b = 100){
//    return a + b
// }
// const ans = addition(2,3)
// console.log(ans)

/*==================================== Question No 24 =========================================
ternary operator : ternary operator is short of if/else statement 
======================================= Answer =====================================*/
// let age = 2;
// let check = (age < 20)?('selected'):('not selected')

// console.log(check)

/*==================================== Question No 25 =========================================
optional chaining 
optional chaining is mostly used with  accessing nested object properitis, normal without 
using optional chaining when we are accessing nested object properities that is not existed 
js show an error and stops all page operation , but when we use optional chainging ?. 
there is no show error but comes undefined 
======================================= Answer =====================================*/

// let user = {
//     name : 'Ali',
//     address : {
//         city : 'Karachi'
//     }
// }
// console.log(user.address.city);
// console.log(user?.district?.street)

/*==================================== Question No 26 =========================================
Array destructuring 
the smart and short way of creating variables is called array destructuring
======================================= Answer =====================================*/
//  let [name,age,designation] = ['Aziz',23,'developer']
//  console.log(name)
//  console.log(age)
//  console.log(designation)




/*==================================== Question No 27 =========================================
object destructuring 
The smart and short way of accessing  object property values is called object destructuring.
======================================= Answer =====================================*/
// let obj = {name : 'Aziz',
//     age : 30,
//     designation : 'developer'
// }
// let {name,age,designation} = obj
// console.log(name)
// console.log(designation)


/*==================================== Question No 28 =========================================
Itrator of/in 
we use Itrator of/in in for loop for accessing elements and index number of an array 
by using of we can get the element of an array and by using in we can get the index number 
of an array element 
======================================= Answer =====================================*/
// let fruits = ['apple','banana','grapes','mango'];
// // for(let key of fruits){
// //     console.log(key)
// // }
// for(let key in fruits){
//     console.log(key)
// }

/*==================================== Question No 29 =========================================
find the number of vowels in string by itrator of
======================================= Answer =====================================*/
// let str = 'Java Script is fun';
// let vowels = 0;
// for(let key of str){
//     if(key ==='a'|| key === 'e' ||key === 'i' || key === 'o' || key === 'u')
//     {vowels++}
// }

// console.log(vowels)

// let str = 'Java Script is fun';
// let vowels = 0;
// for(let i = 0; i <str.length;i++){
//     // console.log(str[i])
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
//     {vowels++}
// }

// console.log(vowels)

/*==================================== Question No 30 =========================================
find the even number inside an array by for loop
======================================= Answer =====================================*/
// let array = [3,8,15,24,42];
// let even = [];
// let odd = [];
// for(let i = 0;i < array.length;i++){
//     console.log(array[i]);
//     if(array[i] % 2 == 0){
//         even.push(array[i])
//     }
//     else{
//         odd.push(array[i])
//     }
// }
// console.log(even)
// console.log(odd)



/*==================================== Question No 31 =========================================
let array = ["alice", "bob", "charlie"]; convert first letter of each in toUppercase()
======================================= Answer =====================================*/
// let array = ["alice", "bob", "charlie"];
// let result = [];
// for(let key of array){
//   let requirement = key.charAt(0).toUpperCase()+ key.slice(1).toLowerCase();
//   result.push(requirement)
//   console.log(requirement)
// }

// console.log(result)



/*==================================== Question No 32 =========================================
The variable that we decalre outside function or block scope {} is called global variable 
we can access global variable in everywhere we want,
The varible that we define inside a function we can access it only inside function we can not 
access it outside function , it is called local variable. 
we can access local variable outside functon only by return 
======================================= Answer =====================================*/
// function abc(numOne,numTwo){
//   let sum = numOne + numTwo;
//   return sum;
  
// }

// let ans = abc(5,10)
// console.log(ans)


/*==================================== Question No 33 =========================================
we can modified the global variable inside function by using window. , remember we can only 
modified or update global variable if created by var , not let or const
======================================= Answer =====================================*/
// var num = 100;
// function addition(){
//   console.log('window.number :',window)
//   window.num = window.num + 5
// console.log(num)
// }
// addition()
// console.log('outside funciton : ',num)

/*==================================== Question No 34 =========================================
calling global variable inside function
======================================= Answer =====================================*/
// var numberr = 5 ;
// function abc(){
//   let numberr = 10; 
//   console.log('local variable : ',numberr);
//   console.log('global variable : ',window.numberr)
// }

// abc()




/*==================================== Question No 35 =========================================
block scope  
the variable that we create inside {} is called block scope variable, var is not block 
scope means if we create var inside {} we can accesss it outside but const and let are block scoped 
var is only fuction scope
======================================= Answer =====================================*/
// {
//   var numThree = 30
// }

// console.log(numThree)
// {
//   const name = 'Aziz'
// }
// console.log(name)
/*==================================== Question No 36 =========================================
Hoisting 
when our js file loads , js v8 engine reads or scans our js file
calling functions or varialbe before declaration in js file is called hoisting ,,
var and traditional function is hoisted but let , const and arrow function is not hoisted, 
Es06 all items are not hoisted
======================================= Answer =====================================*/
// console.log(name)
// // var name = 'Aziz'
// // let name = 'Aziz';
// const name = 'Aziz';

// abc()

// function abc(){
//   console.log('hellow i am hoisted funciton')
// }

// abc()
// const abc = ()=>{
//   console.log('Am i hoisted function')
// }


/*==================================== Question No 37 =========================================
Math.pow() is built in js function it is used to find the power or exponent of any number 
we pass two things inside its parameter, one base and another exponent
======================================= Answer =====================================*/
// let num = 2 
// let ans = Math.pow(num,3);
// console.log(ans)



/*==================================== Question No 38 =========================================
Exponentiation operator 
Exponentiation operator is advance of Math.pow(),
======================================= Answer =====================================*/
// let number  = 2 ;
// let ans = number ** 3; 
// console.log(ans)


/*==================================== Question No 39 =========================================
Local Storage 
is a storage of browser. we can store small text and data in local storage, we can not
store images and heavy data in local storage. when we close our browser or shut down 
computer , data does not removes and remains save , we can use it in same browser and 
same computer, data does not removes when we ourselves do not remove it, 
======================================= Answer =====================================*/

// // save name in local storage 
// function saveName(){
//     let name = document.getElementById('nameInput').value;
//     if(name.trim() === ''){
//         alert ('enter your name')
//         return
//     }
//     localStorage.setItem('username',name)
//     alert('name saved')
//     document.getElementById('nameInput').value = ''
// }

// // removeName
// function removeName(){
//     let getName = localStorage.getItem('username');
//     if(getName){
//         localStorage.removeItem('username')
//         alert('Name removed successfully')
//     }
//     else{
//         alert('username is not existing in local storage')
//     }
// }

// // getname
// function getName(){
//     let gettingName = localStorage.getItem('username');
//     if(gettingName){
//         alert('welocme');
//         let show = document.getElementById('show');
//         show.innerHTML = gettingName
//     //    document.body.innerHTML = gettingName
//     }
//     else{
//         alert('local storage is empty')
//     }
// }




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 40 =========================================
if we decalre a variable and donot give it value it is called undefined but if we 
declare a variabe and give it value null deliberately , it is called null
======================================= Answer =====================================*/
// let a;
// console.log(a)
// let b = null;
// console.log(b)


/*==================================== Question No 41 =========================================
local storage
======================================= Answer =====================================*/
            
// const user = {
//     username : 'Aziz',
//     designation : 'developer',
//     city : 'Karachi',
//     age : 30,
//     skills : ['html','css','javascript']
// }
// console.log(user,typeof user);
// const uid = new Date().getTime();
// console.log(uid);
// const stringData = JSON.stringify(user);
// console.log(stringData,typeof stringData);
// localStorage.setItem('data',stringData)
// localStorage.setItem('userId',JSON.stringify(uid))

/*==================================== Question No 42 =========================================
callback 
the function is passed to another function as an argument is called call back function 
======================================= Answer =====================================*/
// function sayHello() {
//   console.log("Hello!");
// }

// function greet(callback) {
//   callback(); // calling the callback function
// }

// greet(sayHello);
// function sayHello(){
//     console.log('hello')
// }
// function greet(callback){
//     callback()
// }
// greet(sayHello)



// second example:
//        function main(a, b) {
//   let ans = a + b;
//   console.log(ans);
// }

// function second(cb) {
//   let a = 4;
//   let b = 5;
//   cb(a, b); // pass a and b to the callback
// }

// second(main);

// function main(a,b){
//     let ans = a + b;
//     console.log(ans)
// }
// function second(cb){
//     let m = 4;
//     let n = 5;
//     cb(m,n)
// }
// second(main)

// function hello(){
//     console.log('i am hello function ')
// }
// function main(ok){
//     ok()
// }
// main(hello)

/*==================================== Question No 43 =========================================
object destructuring . 
we can get properties values of object by .notation like obj.age but here we destruct object 
left side we write variable like var, const or let than inside {} we write properties name and after 
= we write obj name 
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     password : 1234,
//     age : 30,
//     designation : 'developer'
// }
// console.log(obj)
// const {name, ...rest} = obj;
// console.log(name);
// console.log(rest)




/*==================================== Question No 44 =========================================
call back function 
the funtion that we pass as an argument to another function is called call back funciton 
======================================= Answer =====================================*/
// const greeting = ()=>{
//     console.log('I am call back function')
// }

// const main = (a)=>{
// a()
// }
// main(greeting)

/*==================================== Question No 45 =========================================
Higher order funciton 
the function that takes another function as an argument or return a new function or do both tasks ,
take function as argument and return a funtion also is called Higher order function 
======================================= Answer =====================================*/
//  First Example :
//         ________________________________
// function higherorder(receive)
// {receive()};

// function greeting(){
//     console.log('welcome to higher order funciton')
// }
// higherorder(greeting())

// function higherorder(a){
//     a()

// }

// function greeting(){
//     console.log('welcome to higher order function')
// }
// higherorder(greeting)


// returning a function 
// const higherOrderFunction = (num) =>{
//      console.log('num',num)
//     return function(anotherNum){
//          console.log('another num :',anotherNum)
//         return num * anotherNum
//     }}
//     const result = higherOrderFunction(5);
//     console.log('result ', result(2))

// const higherOrderFunction = (num)=>{
//     console.log('num: ',num);
//     return function (anotherNum){
//         console.log('another num :',anotherNum)
//         return num * anotherNum
//     }
// }
// const result = higherOrderFunction(5)
// console.log('resul ',result(2))
/*==================================== Question No 46 =========================================
Closure funciton 
we make a parent funciton and inside parent funciton we return a anonymous function and 
child (anonymous ) uses the parameter and local variable of parent funtion directly with 
out receing in its parameter , is called closure funtion , the child function is called 
closure function b/c it remembers the scope of the outer function , it can use the variable that 
we declare in its parent funciton scope, let ,var and const also
======================================= Answer =====================================*/

// function parent(a){
//     let b = 10;
//     return function(){
//         return a + b

//     }
// }
// parent(4)

// let ans = parent(4);
// console.log(ans())


/*==================================== Question No 47 =========================================
object oriented programming 
it is an object and we write data, variables and functions inside  oop.
The first pillar of oop is object
======================================= Answer =====================================*/
// The first pillar of oop
// let obj = {
//     name : 'aziz',
//     age : 30,
//     designation: 'developer',
//     greeting : function (){
//         return  `My name is ${this.name} and my age is ${this.age}`
//     }
// }
// console.log(obj.greeting())



/*==================================== Question No 48 =========================================
class is second pillar of oop, first we write class and than we write the name of class 
initial letter capital like Car, and we use constructor function inside class object to 
receiving value by parameter, we receive values in parameter of constructio and save them in 
{} by this.name = name , and 
 if we have to show this information than we create a method inside class obj after constructor.
======================================= Answer =====================================*/
//  class Student {
// constructor(name,age,designation){this.name = name;
//   this.age = age;
//   this.designation = designation;
// }
// details(){return `My name is ${this.name} and my age is ${this.age} and my designation is ${this.designation}`}
// }
// const newStudent = new Student('Aziz',30,'Designer')
// console.log(newStudent);
// let ans = newStudent.details();
// console.log(ans)

// class Student {
//     constructor (name,age,designation){
//         this.name = name;
//         this.age = age,
//         this.designation = designation

//     }
//     details(){return ` My name is ${this.name}, my age is ${this.age} and my designation 
//     is ${this.designation}`}
// }
// const newStudent = new Student('Aziz',30,'developer')
// console.log(newStudent);
// let ans = newStudent.details();
// console.log(ans)



// class Car {
//     constructor(color,model,year){
//         this.color = color,
//         this.model = model,
//         this.year = year
//     }
//     details(){
//         return ` The color of car is ${this.color} , the model of car is ${this.model} and 
//         manufactururing year is ${this.year}`
//     }
// }

// const newCar = new Car('green','honda',2023)
// console.log(newCar.details())
/*==================================== Question No 49 =========================================
inheritence 
inheritence is third pillar of oop, if we have created  class object and we are creating 
another object than we can use the properities of first object by using concept of inheritence 
we write extends before the name of first object and receive the properties of first object and 
new object in constructor paramete and in constructor {} we access the properties that are we 
extending in super and that are we not extending by parents we get by this.property , we receive all the properties 
from parent by using extends by super keyword.
======================================= Answer =====================================*/
//  class Student {
//   constructor (name){this.name = name;}
// }
// class Student2 extends Student {
//   constructor(name,age){super(name)
//     this.age = age}
//   show(){return `My name is ${this.name} and age is ${this.age}`}
// }
// const result = new Student2('Ahmed',30);
// let ans = result.show();
// console.log(ans)
// class Student {
//     constructor(name){
//         this.name = name
//     }
// }
// class Student2 extends Student {
//     constructor(name,age){
//         super(name)
//         this.age = age
//     }
//     show(){return `My name is ${this.name} and my age is ${this.age}`}
// }
// const newStudent  = new Student2('ahmed',40)
// console.log(newStudent);
// let ans = newStudent.show();
// console.log(ans)

// second exmaple 
// class Student { 
//     constructor(name,age,designation){
//         this.name = name,
//         this.age = age,
//         this.designation = designation
//     }
// }

// class Student2 extends Student {
//     constructor(name,age,designation,city){
//         super(name,age,designation)
// this.city = city
//     }
//     show(){
//         return `My name is ${this.name}, my age is ${this.age}, my deignaiton is ${this.designation} and 
//         my city is ${this.city}`
//     }
// }
// const newStudent = new Student2('Aziz',30,'developer','karachi')
// console.log(newStudent.show())
/*==================================== Question No 50 =========================================
polymorphism 
polymorphism is fourth pillar of oop . 
same function name but different behaviour depending on the object 

======================================= Answer =====================================*/

// class Cars {
//   works(){return `cars are driving on roads`}
// }
// let ans1 = new Cars();
// let result = ans1.works();
// console.log(result)
// // 2 
// class Boats extends Cars{
//   works(){return `Boats are sailing on water`}
// }
// let ans2 = new Boats();
// let resul1 = ans2.works();
// console.log(resul1);
// // 3 
// class Kites extends Boats{
//   works(){return `kites are flying in air`}
// }
// let ans3 = new Kites();
// let resul3 = ans3.works();
// console.log(resul3)

// class Cars {
//     works(){
//         return ` cars are running on the roads`
//     }
// }
// let ans = new Cars();
// console.log(ans.works())
// // boats 
// class Boats extends Cars {
//     works(){
//         return ` Boats are sailing on water`
//     }
// }
// let ans2 = new Boats();
// console.log(ans2.works())

// // aeroplane 
// class Aeroplane extends Cars {
//     works(){
//         return `Aeroplanes fly in the air`
//     }
// }
// let ans3 = new Aeroplane();
// console.log(ans3.works())

/*==================================== Question No 51 =========================================
Encapsulation 
hiding private data in class object and give access by specific method 
======================================= Answer =====================================*/

class BankAccount {
    #balance = 100;
    // deposit
    deposit(amount){
        if(this.#balance >= 0){
            return this.#balance =  this.#balance + amount
        }
    }
    // withdraw 
    withdraw(amount){
        if(this.#balance > amount){
            return this.#balance = this.#balance - amount
        }
        else{ console.log('Insufficient balance')}
    }
    // checkBalance
     checkBalance(){
        return this.#balance
     }
}
let account = new BankAccount()
console.log(account.checkBalance())
console.log(account.deposit(400))
console.log(account.checkBalance())
console.log(account.withdraw(3000))
console.log(account.checkBalance())

