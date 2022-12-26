// console.log("MY Computer");


// const arr1 = [1,4,18,34,47,67,65]
// numbers < 50
// let userarr = arr1.map((nums,index,arr)=> {
// return nums > 9 ;
// })
// console.log(userarr);

// let userArr = arr1.map((elem,index,arr) =>{
//     return (
//         ` index no. ${index} and Element : ${elem} of array ${arr}`
//     )
// })
// console.log(userArr)

// let arr1sqr = arr1.map((cr)=>{
//     return( Math.sqrt(cr)
//     )
// })
// console.log(arr1sqr)
// let newarr = arr1.map((cr)=>{ 
//     return cr*2;

// }).filter((cr) => cr < 10)

// console.log(newarr);

// const arr1 = [1,4,18,34,47,67,65]

// let rarr = arr1.reduce((acc, cr)=>{
//     return cr;
// } )
// console.log(rarr);

// var tda = [
//         ['hamza','ali' ],
//         ['mubashir','ali'],
//         ['ahsan', 'ali'],
// ]
// let farr = tda.reduce((ac,cv,ind,arr)=>{
// return ac.concat(cv);
// } 
// )
// console.log(farr);






// ===============================New Journey=================================
// console.log("Hello BC");
// var n1 = 78;
// console.log(typeof(n1));
// var myName = "Hanza";
// console.log(typeof(myName));
// var aisalphab = true;s
// console.log(typeof(aisalphab));
// console.log(aisalphab);
// console.log(2 + "7");
// console.log(4 - "3");
// var Uni ;
// console.log(Uni);

// var myNumber = 758756;
// console.log(isNaN(myNumber));

// var myString = "Hamza"
// console.log(isNaN(myString));


// var num = 10;
// var Newnum = ++num;
// console.log(num);
// console.log(Newnum);

// var a = 1;
// var b = 2;
// console.log(a<b && a>b);


// var a=2,b=4;

// var c;
// c=a;
// a=b;
// b=c;
// a = a+b ;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);
// if(a<b)
// console.log("a is Smaller Than b");
// else
// console.log("a is greator than b");

// var year = 2000;
// debugger;
// if(year% 4==0){
//     if (year%100==0) {
//         if(year%400==0){
//             console.log("It is a leap year");
//         } else{
//             console.log("It Is Not A Leap Year");
//         }
//     } else {
//     console.log("It Is A Leap Year");
//     }

// }
// else{
//     console.log("It Is Not A Leap Year");
// }


// var age = 19;

// if (age<18) {
//     console.log("You Are Not Eligible For Vote");
// }
// else{
//     console.log("You Are Eligible");
// }
// var age = 19;
// (age >= 18) ? console.log("You Are Eligible For Vote") : console.log("You Are Not Eligible For Vote");


// var n = 1;
// while(n<10)
// {
//     console.log(n);
//     n++;
// }


// var num, c;
// debugger;
// num=15;
// for(c=1;c<=10;c++)
// {
//     console.log(num + "*" + c + "=" + num*c);
// }
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(45,1)
// sum(67,2);

// sum(67,2);

// sum(67,2);
// var Sum = sum(4,7)


// console.log("Sum Is " + Sum);


// function mult(a,b=4) {
//     return a*b;
    
// }

// console.log(mult(6));

// const sum = (a,b) =>{
//     return a*b;
// }

// console.log(sum(3,7));



// const myArray = ['hamza','ilyas' , 'male ', "ics ", 18 ];

// console.log(myArray[1]);


// console.log(`The BioData Of ${myArray[0]} is Displayed Below:`);
// for (let i = 0; i < myArray.length; i++)
// {
//     console.log(myArray[i]);
// }

// for( elements in myArray ){
//     console.log(elements);
// }

// myArray.forEach((elems,indx)=>{
//     console.log(`element: ${elems} index: ${indx}`);
// })


// console.log(myArray.indexOf("Ilyas",0));
// console.log(myArray.lastIndexOf("Ilyas",1));

// console.log(myArray.includes("Male"));

// let myArray2 = [100, 200, 300, 400, 500, 600]


// const gt200 = myArray2.find((cv)=>{
    //     return cv > 0;
    
    // });
    // console.log(gt200);
    
    
    // const myarr = myArray2.filter((elems)=>{
        //     return elems <= 600 ;
        // })
        
        // console.log(myarr);
        // console.log(myArray.sort());
        
        // const myArray = ['Hamza', 'Ilyas', 'Ilyas', 'Male', 'ICS', 18];

        // myArray.pop(18)
        // console.log(myArray);
        // debugger
        //        Myindexnum = fruits.indexOf("Kiwi");
        //        if(Myindexnum != 0 )
        //        {
            //        deleted= fruits.splice(5,1,"WaterMelon");
            //         console.log(fruits);
            //        }
            // console.log(deleted);
            
            
            // const fruits = ["Banana", "Orange", "Apple", "Mango","Strawberry","Kiwi","Apricot"];
            // let myfruits=  fruits.map((el,ind,arr)=>{
            //           return el;
            //  });
            //  console.log(myfruits);

            //    let newArr = Arr.map((el)=>{
                //         return Math.sqrt(el)
                //     });
                //     console.log(newArr);
                
                
                // NewArr = Arr.map((elms,)=>{
                    //     return elms*2;
                    // }).filter((elms)=>{
                        //     return elms > 10;
                        // })
                        // console.log(NewArr);
                        
                        // a= 3,b=5;
                        // a+=b;
                        // console.log(a);
    //        debugger             
    //  const Arr = [2]
    //  NewArr = Arr.reduce((acc,elm,ind,arr)=>{
    //    return acc= acc*elm;
    //  },4)
    //             console.log(NewArr);

    // var myStr = "I love Programming";
    // // let newstr = myStr.charAt(1)
    // let strstr = myStr[0];
    // console.log(strstr);
    // let datestr = new Date()
    // console.log(datestr);
    // let date2str = new Date().toLocaleString();
    // console.log(date3str);
    // let date3str = new Date().toString();
    // console.log(date3str);



    // console.log(Math.floor(10.999999999));

//     var n = 1;
//     while(n>0)
// {
//     console.log(n);
//     n++;
// }
// const myfunction = () =>{
//     console.log(event.target);
//     console.log("I am running");
// }
// var button = document.getElementById("my-btn");
// button.addEventListener("click",myfunction);


// const marks = {
//     English : 91,
//     Urdu : {
//         marks : 91,
//         percentage : 90,
//     },
//     Physics : 78,
//     Islamiat : 46,
//     Maths : 77,
//     Computer : 75
// }

// let {English,Urdu,phys,isl} = marks;
// console.log(Urdu);

// const Third = "Marks"; 
// let myObj ={
//     Name : "Hamza",
//     Class : 13,
//     [Third] : "90%"
// };
// console.log(myObj);

// let total = 0
// let myArr = [67,87,98,987];
// for(i of myArr){
//       total+=i;
// }
// console.log(total);

// let myObj = {Name : "Hamza" , Class : "ICS"}
// let myObj2 = {...myObj, Age:18}
// console.log(myObj2);

// let myarrObj = [["Name","Hamza"],["Class","BSCS"]];
// const NewEnteries = Object.fromEntries(myarrObj);
// console.log(NewEnteries);


// let mx = Number.MAX_SAFE_INTEGER;
// console.log(mx);

// let hamza = null ?? "he/Him";
// console.log(hamza);


// const sum = (a,b) =>{
//     return a+b;
// }

// const calculator = (para1,para2,callbakfunction)=>{
//     return callbakfunction(para1,para2)
// }
// console.log( calculator(78,3,sum));

// const f1 = ()=>{
//     setTimeout(() => {
//         console.log("Function 1 is called");
//     }, 2000);
// }
// const f2 = () =>{
//     console.log("Function 2 is called");
//     f1();
//     console.log("Function 2 is called again");
// }
// f2();


// let func = (num1)=>(num2)=>(num3)=> console.log(num1*num2*num3);
// func(2)(6)(7);


setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
        console.log("hello2");
        setTimeout(() => {
            console.log("hello3");
            setTimeout(() => {
                console.log("hello4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);