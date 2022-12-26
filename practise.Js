//  1. Ways TO Write
//   console.log("Hi");
//   alert("You Are Admin");
//   document.write("Anything in The Document")

//  2.js console APi
//    console.warn("Dont Watch Porn");
//    console.error("It will damage your mental health");
//    console.assert("99=99")

//   3. Js : Variables
// var n1 = 34;
// var  n2 = 67;
// console.log(n1 + n2)

//   4. At Deep Level, Js has 2 Data Types
//  1.Permitive(undefined,null,number,boolean,string,symbol)
//  2.Reference(Objects & Arrays)

//   PERMITIVE
//  Number
// var n1 = 34;
// var  n2 = 67;
// console.log(n1 + n2)
//  String
// var str1 = ('This is A String');
// var str2 = ('This is Another String');
// console.log(str1 + str2 );
// console.log(marks)

//   Booleans
// var a = true
// var b = false
// console.log(a, b)

//   Undefined(default)
// var tis = undefined;
// var all

//   Null
// var n = null
// console.log(n)

//   REFERENCE
//  Objects
// var marks = {
//     pak: 23,
//     China: 57,
//     Russia: 657
// }

//   Arrays
//    var arr = [1,3,"Hamza",67,76]
//    console.log(arr[2])

//    5.  Operators
//  Arithmetic Operators
// var a = 100;
// var b = 50;
// console.log("a+b is", a+b)
// console.log("a-b is", a-b)
// console.log("a*b is", a*b)
// console.log("a/b is", a/b)

//  Assigment Operators
//  var c = a;
//  c +=5; // c = c+5;
//  c -=5; c = c-5;
//  c *=5; c = c*5;
//  c /=5; c = c/5;
//  console.log(c)

//  Comparison Operators
// var  v =67;
// var  p = 67;
// console.log(v < p)
// console.log(v > p)
// console.log(v == p)
// console.log(v <= p)
// console.log(v >= p)

//  Logical Operators
// AND(&&):
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
// // OR(||)
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// NOT(!)
// console.log(!true)
// console.log(!false)

//  6.  Functions
// works on Dry Principle = don't repeat yourself
// function  add(a, b, c, d){
//   return  c = (a + b + c + d)
// }
// c1 = add(87, 897, 8780, 28)
// c2 = add(879, 87, 879, 188)
// console.log(c1)
// console.log(c2)

//  7. Conditionals in JavaScript
// simple-if
// var marks = 14;
// if (marks > 33){
//     console.log("You Are Passed")
// }

// if else statement
// if(marks > 33){
//     console.log("you Are Passed")
// }
// else{
//     console.log("you Are Failed")
// }

// if else if statement
// if(marks >= 90){
//     console.log("Grade is A+")
// }
// else if(marks >= 80){
//     console.log("Grade is A")
// }
// else if(marks >= 70){
//     console.log("Grade is B")
// }
// else if(marks >= 60){
//     console.log("Grade is C")
// }
// else if(marks < 33){
//     console.log("Failed")
// }

//  8.Loops

// var ar1 = [10,20,30,40,50,60,70,80,90,100]
// console.log(ar1)

// For Loop
// for (i=0;i<ar1.length;i++){
//     console.log(ar1[i])
// }

// Foreach Loop
// ar1.forEach(function(element){
// console.log(element);
// })

// While Loop
// let a = 0;
// while(a<ar1.length){
//     console.log(ar1[a])
//     a++;
// }

// Do While Loop
// let a = 0;
// do{
//     console.log(ar1[a])
//     a++;
// }
// while(a<ar1.length)

// Break(to stop whole loop)
// for (i=0;i<ar1.length;i++){
//     if(i==2){
//     break
//     }
//     console.log(ar1[i])
// }

// Continue(to stop loop for one iteration)
// for (i=0;i<ar1.length;i++){
//     if(i==2){
//     continue
//     }
//     console.log(ar1[i])
// }

//  9. Array Methods in Js
// let ar2 = ["Hamza", 67, 452, "muhammad", 34]
// // console.log(ar2.length)
// // ar2.push("Joker")
// ar2.unshift("joker")
// // ar2.pop()
// // ar2.shift()
// // const NewLen = (ar2.unshift("joker"))
// // console.log(NewLen)
// // ar2.tostring()
// ar2.sort() [Alphabetically]
// let sortedar2 = (ar2.sort())
// console.log(sortedar2)

//  10. String Method in Js

// let str = 'Hamza Is Not A Good Boy Boy'
// console.log(str.length)
// console.log(str.indexOf("Is"))
// console.log(str.lastIndexOf("Boy"));
// console.log(str.slice(0, 23))
// console.log(str.replace('Hamza', 'Hamoo'))

//  11. Dates in Js
// let mydate = new Date();
// console.log(mydate.getTime())
// console.log(mydate.getDay())
// console.log(mydate.getMinutes())
// console.log(mydate.getHours())

//  12. DOM
// document.getElementById('danger').click()
// document.getElementById('danger').style.border = '2px solid red'
// let c = document.getElementsByClassName('buttons')
// console.log(c)
// c[0].style.background = "yellow";
// c[0].classList.add('bg-primary');
// let c = document.getElementsByTagName("h1");
// c[0].classList.add("bg-primary");
// c[0].classList.remove('bg-primary');
// let ie = document.getElementsByTagName("button")
// ie[0].innerHTML ('on console')
// ie[0].innerText ('on console')
// console.log(ie.innerText)
// console.log(ie.innerHTML)
// let myele = document.createElement('p')
// myele.innerText = 'This is my text'
// ie[0].appendChild(myele);
// let myele2 = document.createElement('b')
// myele2.innerText = 'This is also my text'
// ie[0].ReplaceChild(myele2 ,myele);
// removeChild() --->  removes an Element

//  13. Selecting Using Query
// let sel = document.querySelector('.button')
// let sel = document.querySelectorAll('.button')
// console.log(sel)

//  14. Events in Js
// function clicked(){
//  console.log("Danger was Clicked")
// }
// function Safeclicked(){
//     console.log("Safe was Clicked")
// }
// window.onload = function(){
//     console.log("The Page Was Loaded")
//     // alert('Hello World')
// }
// buttons.addEventListener("click", function(){
//     console.log("This was Clicked")
// })
// danger.addEventListener("mouseover", function () {
//     console.log("This was Clicked");
//   })
// danger.addEventListener("mouseout", function () {
//     console.log("Mouse out");
//   });
// danger.addEventListener("mouseup", function () {
//     console.log("Mouse Up");
//   });
// safe.addEventListener("mousedown", function () {
//     console.log("Mouse Down");
//   });
// danger.addEventListener("mouseup", function () {
//     document.getElementById("danger").style.background = 'white'
// console.log("Mouse Up");
// });
//   danger.addEventListener("mousedown", function () {
//     document.getElementById("danger").style.background = ' #db3236  '
//     console.log("Mouse Down");
//   });
// safe.addEventListener("mousedown", function () {
//     document.getElementById("safe").style.background = " #f4c20d ";
//     console.log("Mouse Down");
//   });
//   danger.addEventListener("mouseup", function () {
//     document.getElementById("danger").style.background = "white";

//     console.log("Mouse Up");
//   });
// safe.addEventListener('mouseup', function(){
//     document.getElementsByClassName("buttons").innerText = "Clicked"
//    })
// safe.addEventListener('mousedown', function(){
//     document.getElementById("safe").innerText = "Clicked"
//     document.querySelectorAll('.buttons')[0].style.background = 'black'
//    })
//    safe.addEventListener('mouseup', function(){
//     document.getElementById("safe").innerText = "Clicked"
//     document.querySelectorAll('.buttons')[0].style.background = 'white'
//    })

//    15. Arrow Fuctions
// function sum(a, b){
//     return(a+b);
// }
// sum = (a, b)=>{
//     return(a+b);
// }

//    16. Set Timeout & Set Interval
// print = ()=>{
// document.getElementsByTagName('button')[1].style.background = " #f4c20d ";
// document.getElementsByTagName('button')[1].innerHTML = 'Triggered'
// console.log("This is log")
// }
// setTimeout
// Syntax ---> setTimeout(function, time)
// setTimeout(print, 2000)
// (works only on console) --
// clr = setTimeout(print, 2000);
// clearTimeout(clr)

// setInterval
// setInterval(print, 2000);
// (works only on console) --
// clr = setInterval(print, 2000);
// clearInterval(clr)


//   17. Local Storage In Js
// ---> Syntax 
// localStorage.setItem(key, value);
// ---> save or retrieve:
// localStorage.setItem('hamza', 45)
// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");
// ----> Remove DAta 
// localStorage.removeItem(key);
// ---> Clear
// localStorage.clear()

//  18. JSON
// ---> to convert obj. to string
// obj = {name :"hamza", length: 1}
// obj2 = [1,13,7678,88]
// js = JSON.stringify(obj2);
// console.log(js)
// console.log(typeof(obj2))
// console.log(typeof(js))
// ---> to convert string to obj.
// parsed = JSON.parse(` {"name" : "hamza", "length" : 1}`)
// console.log(parsed)


