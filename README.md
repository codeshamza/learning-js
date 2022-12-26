# learning-js
## Below are the which i noted When i was learning javascrpt.
###  BASIC THINGS:
Alert(“Argument”);  ====  Put An Pop-up Alert On The Screen.
Console.log(Argument); ==== To Print Anything
Console.dir(argument); ==== It prints and give additional details about that function.
typeof(variable name) ===== To Check Datatype of Variable.
isNaN(Argument) ==== To Check Argument Is Number Or Not(False In Case Of Number & True In Case Of Not)
operand === operand /// To Check The values as well as their data types.
Debugger; ====== To Check And Debug The Code Line By Line In Console Of Browser
“use-strict”; ===== It forces to use proper synatax otherwise it throw error.
2D/3D  Arrays ======= Arrays Within The Array Are Called 2D or 3D Arrays./ Array Of An Array Is Called 2D or 3D Arrays.




### Things To Remember:
Null = NO value stored in variable
Undefined = Not Declared
Falsy values: =====  false,“ ”, NaN, null, undefined, 0  (These always evaluates to false(0)).
Break; ===== Terminates The Current Loop, case or label
Template/Strings Literal ======  (  `strings  ${javascript} strings`  )    =====Useful for concatenating strings and variables
Months Counter Starts from 0 in js. Means Jan is 0 And Dec is 11.
You Cannot Use this Object Inside flat arrow function.
Operations:
Number + Number = number
9 + 9 = 18
Number + String = String
67 + “Hamza” = 67Hamza
Number – String = number
6 – “56” = 50
String – String = Nan
“Hamza” – “Ali” = Nan
Variables:
Var name = Value ===== To Declare Variable;


### Data Types:
Permitives:
•	Undefined
•	Number
•	String
•	Boolean
•	BigInt
It is used when we need to perform operations on number bigger than 9007199254740991, simply add n at end of those numbers on which arithmetic operations to be performed. e.g. 
9007199254740991n + 45458n
•	Symbol

### Types Of Operators:
•	Assigment(assigns a value)
=
•	Arithmetic
i.	Increment/Decrement Operators
Postfix: It Changes The Value Of the original Variable And Does Not Change The Second Variable/ It Changes the value at the end of expression.
Prefix: It Changes The Value Of the original Variable And The Second Variable As Well
/It Changes the value at the start of expression.
•	Logical
&&(And)
||(Or)
! (Not)
•	Comparison
== (Equal)
>= (Greator than equal to )
<= (Less than equal to )
!= (Not Equal To)
•	String(Concatenate)
+
firstString.concat(secondstring)
•	Conditional(ternary)
Variablename = (condition)? value 1 : value 2;

•	Nullish Coalescing Operator ??:
It Return Its right side operand if it is null or undefined otherwise return its left hand side      operand
             Example:
             let hamza = null ?? "he/Him";
             console.log(hamza);
            // Output: he/Him


### Control Statement Structures:
•	If…..else
if (condition) {
} else { 
}
•	Else-if-else
if (condition) { 
} else-if(condition) {   
}
else{   
}

•	Switch Statement 
switch (key) {
    case value:
                  statements
        break;
    default:
        break;
}


Loop Structures:
•	While 
while (condition) {
    statements
    increment/decrement
}
•	Do-while
do {
     statements
     increment/decrement
} while (condition);
•	For
For(initialization;condition;iteration){
statements
}
•	For-In 
for(let elements in myArray ){
    console.log(elements);
}
===== To Show The Index Of Elements In An Array
•	For-of
for(let elements 0f myArray ){
    console.log(elements);
}
===== To Show The Data Of Elements In An Array
•	ForEach
The foreach loop iterates through each item, hence called foreach loop
Simple Syntax:   Arrayname.forEach(functionName(elements,Index,ArrayData){
Statements   });
Arrow Fuction Syntax:  Arrayname.forEach((elements,Index,ArrayData)=>{
Statements   });
•	Conditional(ternary)
Variablename = (condition)? value 1 : value 2;



### Functions:
•	Simple Syntax
function name(params) {
    statements
}
•	Fat Arrow syntax
Const  functionName = (params) => { 
           Statements; 
}
•	Parameters
Values that you pass while calling a function
•	Default Parameters
function mult(a,b=4) {
    return a*b;
}
console.log(mult(6));
=== To Default Pass The Parameters To A function====It always pass to first parameter if one argument is  given
•	Arguments
Values that you pass while calling a function
•	Functional Expression
Variable = FunctionName(Arguments);  ==== To Call or Use Function As A Variable.
•	Return
Return expression;  ==== To Return The Value Back To The Caller.
•	Anonymous Fuction & Expression
Var variableName = function(params){
statements
}
====== To Use variable instead Of Function Name To Call 



### Async Await Function:
It runs The Function asynchoronously(without waiting for the function to be completely executed instead parallely executes other instruction)
Simple Syntax:
   Async function name(params) {
    statements
}
### Flat Arrow Syntax:
    Const  functionName = async (params) => { 
           Statements; 
}




### Higher Order function and CallBack Function:
callBackfunction: function which is taken as an argument for hof is called callback function.
HOF: function which accepts callbackfunction as an argument is called higher order function.
Syntax:
function name(param1,param2,callbackfunction) {
    statements
}
Example:

const sum = (a,b) =>{
    return a+b;
}

const calculator = (para1,para2,callbakfunction)=>{
    return callbakfunction(para1,para2)
}
console.log( calculator(78,3,sum));
//output : 81

Function Currying:
Curring is the technique of evaluating function with multiple arguments, into sequence of functions with single argument.
Example:
const fun1 = (num1) =>{
    return fn2 = (num2)=>{
        return fn3=(num3)=>{
            console.log(num1*num2*num3);
        }
    }
}
fun1(2)(6)(7);
//Output: 84
Short Form:
let func = (num1)=>(num2)=>(num3)=> console.log(num1*num2*num3);
func(2)(6)(7);



### CallBack Hell:
The Nested Functions One After The Other Is Called CallBack Hell.
Example:
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








### Scopes:
•	Var = function scope
•	Let = block scope
•	Const = block scope

### Arrays:
Traversal of Arrays:
•	To Fetch Element From Array
Arrayname.[index of element]
•	To Check Number of elements of an array / length of Array  
Arrayname.length



### Searching and Filtering Of An Array:
•	IndexOf():
To Find The Index Of Some Element From Specific index in forward direction(first matched element’s index)
Syntax: Arrayname.indexOf( “elementname”, to start searching index (e.g 2) ) =====It Returns -1 if Element not found
•	lastIndexOf():
To Find The Index Of Some Element From Specific index in backward direction(first matched element’s index)
Syntax: Arrayname.indexOf( “elementname”, to start searching index (e.g 2) ) =====It Returns -1 if Element not found
•	Includes():
To Check wether the element exists in Given Array Or Not In Forward Direction.
Syntax: ArrayName.includes(“elementname”, to start searching index (e.g 2)) =====It returns true if element found in that array, otherwise it returns false.
•	Find()
To Find The Element From The Array By Using Condition in forward direction.
Syntax: arrayame.find((elements,index,array)=>{
     Return condtion;
});   ======= It Returns Only the First Satisfied Element In An Array And Returns Undefined If Element Not Found.
•	FindIndex()
To Find The index of Element From The Array By Using Condition in forward direction.
Syntax: arrayame.findindex((elements,index,array)=>{
     Return condtion;
});   =======  It Returns Only the First Satisfied Element’s index In An Array And Returns -1 If Element Not Found.
•	Filter() 								                       *method To Find The Elements From The Array Using Condition in forward direction.
Syntax: arrayname.filter((elements,index,array)=>{
Return condition;
});  ===== It Returns All The Satisfied Elements of the Array And Returns empty array[ ], If No element Found.
•	Map()				                                                                                          *method                     
To Find The Elements From The Array Using Operations On Elements in forward direction. It Return Boolean values for conditions. It doesn’t mutate the original array instead it creates new array . It is chainable.
Syntax: arrayname.map((elements,index,array)=>{
Return condition;
});
•	Reduce()                                                                                                                              *method                     
It Returns the Single Accumalated Value Of An Array. method does not Mutate the original array instead it returns the accumulated result in New Array. It Can Also Be Used To Flatten An Array
Syntax: array.reduce((Accumulator, Elements, Index, arr) =>(
Returns Condition or expression;
} initialValue);


Array Flatten Method:
•	Flat()
It can be used to flat an array upto specific number of level.
Syntax:
Arrayname.flat(levels(e.g. 2))





### Sorting and Comparing of An Array:
•	Sort()                                                                                                           method
Arrayname.sort()  ======  It Returns the sorting array in ascending order === It deals with string type data, it converts into the strings if numbers are to be sorted  




•	CRUD:							                             	method
•	Push()
It can add elements to end of an array. It returns new length of that array in variable
Syntax: arrayname.push(“data to be entered”)  
•	Unshift()							                            	method
It can add elements to start of an array. It returns new length of that array to left variable
Syntax: arrayname.unshift(“data to be entered”)  
•	Pop( )								                                        method
It removes the last element from array and returns it.
Syntax: arrayname.pop()
•	Shift()	
It removes the first element from array and returns it.
Syntax: arrayname.shift()
•	Splice()                                                                                                                                  *method         It and/or removes array elements. It can Also overwrites the original array.
Syntax:  arrayname.splice(start index, how many element which is to de deleted or overwrited from start index (eg 2 which means delete or overwrite 2 elements from start index,elements name e.g “Hamza”) ===== It Returns The Deleted Elements	
								                                     
						 
    





### Strings In JavaScript               
•	To Find The Length Of The Strings
Stringname.length
•	Escape Characters
\’                                    ====  To Put Single Quote In A sting
\”                                    ====  To Put Double Quotes In A sting
\\                                    ====  To Put Backslash In A sting

Methods:
•	IndexOf():
To Find The Index Of Text From Specific String in forward direction(first matched element’s index)
Syntax: Stringname.indexOf( “name”, to start searching index (e.g 2) ) =====It Returns -1 if Data not found
•	lastIndexOf():
To Find The Index Of Text From Specific String in backward direction(first matched element’s index)
Syntax: Stringname.indexOf( “name”, to start searching index (e.g 2) ) =====It Returns -1 if Data not found
•	Search()
To Find The Index Of Text From Specific String in backward direction(first matched element’s index)
Syntax: Stringname.search( “name”) =====It Returns -1 if Data not found
•	Slice()*
It Extract specific text from the string and returns it to new string.
Syntax: stringname.slice(start index,end index) ==== It does not include the last end index’s argument. 
•	Substring()
It Extract specific text from the string and returns it to new string. But it doesn’t accept the negative Indexes. If start is greater than end, arguments are swapped: (4, 1) = (1, 4)
Syntax: stringname.substring(start index,length of extracted array) 
•	Substr()
It Extract specific text from the string and returns it to new string. But its second parameter accept the length of extracted array. You Can Also Extract Data from End Of The String With this method.
 Syntax: stringname.substring(start index) 
•	Replace()
It Replaces specific text from the string and returns it to new string. It only replaces first original text.
 Syntax: stringname.replace(original text, replaced text)


### Extracting String Characters From Indexes:
•	CharAt()
It Returns The Character Placed On The Given Index From The String In A New Array.
Syntax: stringname.charAt(index)
•	CharCodeAt()
It Returns The Unicode of that Character Placed On The Given Index From The String In A New Array.
Syntax: stringname.charAt(given index)
•	Property Access[ ]
It returns the character of the given index number from the string in a new array.
Syntax:  str[ index number ]
Other Useful String Methods:
•	toUpperCase()
It Convert Whole String To Upper Case.
Syntax: stringname.toUpperCase()
•	toLowerCase()
It Convert Whole String To Lower Case.
Syntax: stringname.toLowerCase()
•	Conact()
It joins Two or more Strings.
Syntax: firststringname.concat(secondstringname,thirdstringname)
•	Trim()
It removes the Spaces from both Sides Of The String And Return It To The New String.
Syntax: arrayname.trim()
•	Split()
It Converts The String Into Elements of Array On The Breakpoints And Returns It to The New String.
Syntax: stringname.split(breakpoint e.g. “,”)

### Date & Time Objects:
•	Date.now()
It returns the total miliseconds from the date Jan 1st, 1970 in new string.
•	New Date()
It creates new instance of date object and returns it to new string.
It returns: day month date year hours:minutes:seconds(in 24 hrs format) timezone
e.g. Sun Jul 17 2022 19:25:10 GMT+0500 (Pakistan Standard Time)
•	New Date.tolocalestring()
It returns the local area date string to new string.
Returns : date/month/year, hours:minutes:seconds AM/PM
e.g. 7/17/2022, 7:43:31 PM
•	New Date.tolocaleDateString()
It returns the local area date string to new string.
Returns : date/month/year
e.g. 7/17/2022
•	New Date.tolocaleTimeString()
It returns the local area time string to new string.
Returns : hours:minutes:seconds AM/PM
e.g. 8:21:46 PM


### Individual Date & Time Getting Methods:
•	New Date.getFullYear() ….. for year
•	New Date.getMonth ….. for Month // 0 to 11
•	New Date.getDate …… for Date
•	New Date.getDay …… for Day
•	New Date.getHours() ….. for hours
•	New Date.getMinutes ….. for Minutes
•	New Date.getSeconds …… for Seconds
•	New Date.getMiliSeconds …… for Miliseconds


### Math Object Properties:
•	Math.PI …. Returns the value of Pi
•	Math.round()
It round the number to its nearest integer according to basic math principles.
Syntax: Math.round(argument)
•	Math.pow()
It returns the value of x to power of y
Syntax: Math.pow(x,y)  means x**y
•	Math.sqrt()
It returns the square root of the argument.
Syntax: Math.sqrt(argument)
•	Math.abs()
It always returns the positive integer of Argument.
Syntax: Math.abs(argument)
•	Math.ceil()
It round the number to its nearest integer By incrementing value on minor decimal part.
Syntax: Math.round(argument)  e.g. Math.round(10.00001)   = 11  
•	Math.floor()
It round the number to its nearest integer By it does not increments value on major decimal part.
Syntax: Math.round(argument)  e.g. Math.round(10.99999)   = 10
•	Math.min()
It returns the lowest integer from the given list of Arguments.
Syntax:  Math.min(x,y,z,a,b,c)   
•	Math.max()
It returns the highest integer from the given list of Arguments.
Syntax:  Math.max(x,y,z,a,b,c)   
•	Math.random()
It returns the random numbers between 0 And 1.
Syntax:  Math.random()
•	Math.trunc()
It returns the integer part of the argument.
Syntax: Math.trunc(argument)   ======= It is equal to Math.floor() if value is positive and Math.ceil() if value is negative.




###   Windows  & Document Object In JavaScript:
•	Window Is Global Object Means Whole Browser Can Be Taken As Window And The Document Is The Child Part Of The Windows. 
•	We Do Not Need To Refer Windows As The Object/Method/Property, But We Need To Refer The Document  As The Object/Method/Property.

### Document Object Model & Browser Object Model:
Dom dealts With The documents whereas Bom dealts with all the navigation, alert, prompt, confirm, screen, history, frames, location, http requests, and all browser related objects aside from document.

### Windows Properties:
Innerwidth: It shows the width of screen in pixels.
Innerheight: It shows the height of screen in pixels.
Location.href: It gives the link of current website.



### Dom navigation:
•	Document.documentElement ……… to get root element(html) from your document
•	Document.head …..  to get head from your document.
•	Document.body …..  to get body from your document.
•	Document.parentnodename(e.g. body).childNodes …… to get all the child nodes from parent node including whitespaces, tabs and enter.
•	Document.parentnodename(e.g. body).children …… to get all the child nodes from parent node excluding whitespaces, tabs and enter.
•	Document.mainNode.children.length …… to get the length of childrens/elements of parent node in numeric.
•	Document.mainNode.hasChilNodes() ..... to get wether the node has child nodes or not. If it have, then it returns true, otherwise false.
•	Document.childnodename(e.g. body).parentNode …… to get parent nodes from child node including whitespaces, tabs and enter.
•	Document.querySelector(“”) …. To get any element from document with their tag name, classname or id-name. It Only Changes the first matching element.
•	Document.querySelectorAll(“”) …. To get any element’s length from document with their tag name, classname or id-name.
•	Document.getElementById() ….. to get element from their id. It returns null if id not found.
•	Document.getElementsByClassName() ….. to get element from their class name.
•	Document.getElementsByName() ….. to get element from their name-attribute.
•	Document.getElementsByTagName() ….. to get element from their tag name.
•	Document.elementname.innerHTML …..  To Change the inner-html part of that element.
•	Document.elementname.innerText …..  To Change the inner-text part of that element.
•	Document.innerAdjacentHTML …  To Change or inject html 
•	Syntax:
•	Document.innerAdjacentHTML(“location”,reference element)
•	Document.elementname.value …..  To Change the value attribute text part of that element.

### Events In JavaScript:
•	Ways Of Writing Events In Js.
Using alert() Method.
Using inline events such as element.onclick(‘’).
Using Functions.	// You Cannot call same event multiple time as it overwrites the first writted function.
•	Using addEventListener() Method
Syntax: Element.addEventListener(“type of event(e.g. click)”, functionName,true/false)

Arrow Function Syntax: Element.addEventListener(“type of event(e.g. click)” ,( ) =>{
statements
},true/false);    // You Can call same event multiple time as it doesnt overwrites the first writted function.



### Timing Based Events:
•	setTimeout()
It executes function after waiting for specified time(miliseconds)
Syntax: setTimeout(function, time);
Flat Arrow Syntax: setTimeout( ( )=>{
),time};
•	ClearTimeout()
It Stops the setTimeout function using its reference.
Syntax: clearTimeout(setTimeout’s reference);
•	setInterval()
It executes function again and again for specified time(miliseconds).
Syntax: setInterval(function, time);
Flat Arrow Syntax: setInterval( ( )=>{
),time};
•	ClearInterval()
It Stops the setInterval function using its reference.
Syntax: clearInterval(setInterval’s reference);





### Event Object:
       Event ……… gives all the information about the event(it is parent of all other properties.)
          Event.target ……. Gives the info about targeted element
          Event.type ……… gives the info about event type(e.g. click)
          Event.key ……… gives the info about which key is pressed(e.g. click)
          Event.code ……… gives the info about the code of that pressed key(e.g. click)
// All these should be written inside the event function inside console.log().

### Mouse Events:
•	Mouseenter
•	Mouseleave
•	Onmousedown
•	Onmouseup

### KeyBoard Events:
•	Onkeypress
•	Onkeydown
•	Onkeyup

### Input Events
•	Onchange == it fires on input.
•	Load == it fires on reload


### Event Bubbling And Capturing:
It refers to the order in which event fired from parent and child containers.
Bubbling === inner To outer(Child to Parent)…… It Is The Default phase of event propagation.(false)
Capturing ==== outer to inner(Parent To Child) …..(True)
Event.stopPropagation() === it stops the events from firing through propagation.


### (OOPS)Object Oriented Programming:
•	Object Literals:
It can be used to store data such as variables and functions etc in a single variable.
Syntax: 
Var name = {
Key(variablename) : value,          //for variables
Functionname(){                            //for functions
Statements…
}
}
Flat Arrow Syntax: 
Var name = {
Key(variablename) : value,          //for variables
Functionname : () =>{                            //for functions
Statements…
}
}

•	Object inside the object:
Var objectname = {
Key(objectname) :{                        // for objects
Key(variablename) : value,
} ,
Key(variablename) : value,          //for variables
Functionname(){                            //for functions
Statements…
}
}

### Object Methods :
•	Object.values()
It return All the values inside the object in the array.
Syntax(for calling):
Object.values(object name)
Use Case:
Let myObj = {
Name : “Hamza”,
Class : “BSCS”
}
Object.values(myObj);
// Output:  [Hamza,BSCS]

•	Object.enteries()
It return All the enteries inside the object in the array.
Syntax(for calling):
Object.enteries(object name)
Use Case:
Let myObj = {
Name : “Hamza”,
Class : “BSCS”
}
Object.enteries(myObj);
// Output:  [[“Name’,“Hamza”],[“Class”,“BSCS”]]

•	Object.fromEnteries():
It return All the enteries inside the array to the object. It Is opposite of  Object.enteries()
Method.
Syntax:
Let myarrObj = [[“Name’,“Hamza”],[“Class”,“BSCS”]];
Object.fromEntries(myarrObj);
// Output:  { Name: 'Hamza', Class: 'BSCS' }




### this Object:
It Contains the current context and can different values depending on where it is placed.
Use Cases:
•	If it is used in anywhere on global scope.  It gives the value of global object(windows). it can get all the properties, varaibles and methods from windows like alert().
•	If it is used in an object …… the object will become its current context. Now It will It gives the value of  that object. it can get all the properties, variables and methods from object like this.variableName.  // It didn’t work if you use flat arrow function.
### Destructuring:
Method of Storing the elements into independent variables is called destructuring.
Array:
It refer to destructure an elememts of array to independent variables.
Syntax:
Let [variablename0, variablename1, variablename2] = arrayname;
// it will assign the values of that array to these independent variables in a sequence/order of index. Means index 0 element of array will assign to first element,  variablename0 (in this case) so on. You Can Also Manually Add the Elements to an array as:
Let [variablename0, variablename1, variablename2, variablename3=”value”] = arrayname;

### Object:
It refer to destructure elements of object to independent variables.
Syntax:
Let [elementname0, elementname1, elementname2] = objectname;               // it must be same as names in original object.
// it will assign the values of that object variables and these become independent variables in a sequence/order of index. Means at index 0 element of object will assign to first element, elementname0 (in this case) so on. You Can Also Manually Add the Elements to an object as:
Let [elementname0, elementname1, elementname2, elementname3=”value”] = objectname;

###      Object Properties:
Dynamic data[ ]:
It can be used to add dynamic data such as global data to object’s local data. 
Syntax:
Globalvariable = “value”
Const obj = {
[Globalvariablename] : “value”      // In this case we use global object variable’s value as a key                  
                                               // in object’s local data. Also you can write expressions inside [ ].
}
### Spread Parameter…
For Arrays:
It can Be used to add array in an array.
Syntax:
[…arrayname]
Use Case:
Const arr1 = [mango, apple, pineapple]
Const arr2 = […arr1, blueberry, leach]
For Objects:
It can Be used to add object in an object.
Syntax:
[…objectname]
Use Case:
let myObj = {Name : "Hamza" , Class : "ICS"}
let myObj2 = {...myObj, Age:18}

### Rest Parameter…
For Arrays:
It allow us to pass indefinite number of arguments as an array to the function.
Syntax:
Function name(…arrayname){
}
Name(argument1, argument2, argument3, argument4);
Use Case:
Function name(…mynumbers){
       For(i of …mynumbers){
Total +=I;
}							             //it will pass all the arguments as 
}							              // an array to function and store the                        
								// sum in total.
Name(1,2,3,4,5,6,7);

###        Synchoronous JavaScript:
In Synchoronous JavaScript, instructions are executed one after the other in a sequence. a statement has to wait for the earlier statement to get executed.
const f1 = ()=>{
    console.log("Function 1 is called");
}
const f2 = () =>{
    console.log("Function 2 is called");
    f1();
    console.log("Function 2 is called again");
}
f2();

// Output: 
Function 2 is called
Function 1 is called
Function 2 is called again
 ###  Asynchoronous JavaScript:
Functions running in parallel with other functions are called asynchronous.
Example:
const f1 = ()=>{
    setTimeout(() => {
        console.log("Function 1 is called");
    }, 2000);
}
const f2 = () =>{
    console.log("Function 2 is called");
    f1();
    console.log("Function 2 is called again");
}
f2();
// Output: 
Function 2 is called
Function 2 is called again
Function 1 is called
Scope Chain & Lexical Scoping:
 It refers to the allow the access of outer variables by inner function but deny the access of inner variables by outer function.  
Closures:
Everytime,  a function is created it automatically created a closure. It allow the inner function to access the outer function variables.
It works as a bag that stores the outer function variable’s values and  give access to inner function to use that variables.



### API(Application Programming Interface):
An Application Programming Interface (API) is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.

### AJAX(Asynchoronous JavaScript And XML) / XMLHttpRequest:
It shows the content without the need of refreshing whole page.

Ready State Steps(5):
•	0: Request not initialized.
•	1: Server Connection Established.
•	2: Request Received.
•	3: Processing Request.
•	4: Request Finished And the Response Is Ready.

Status(it tells how code is received/status of response):
•	200 : “Ok”
•	403 : “ForBidden”
•	404 : “Not found”

Responses(it tells the format of response):
•	responseText 
•	responseXML

XMLHttpRequest Object Methods:
•	Objectname.open()
Syntax:
Objectname.open(“method e.g.(GET/POST)”,Filepath/Url,async mode(true/false))

•	Objectname.send()
//It simply sends the request to the server.


Example:
•	We Must Declare new instance for xmlhttprequest Instance.
const newIns = new XMLHttpRequest();






### JSON:
A json is a format of object in which everything is written string. It is a format in which APIs are usually written and transfer from one location to the other.
JSON.stringify:
It converts an object to json string.
Syntax:
JSON.stringify(objectname)

JSON.parse:
It convert json string back to an object.
Syntax:
JSON.parse(json stringname)




### Fetch():
The fetch() method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.
With The Help Of Promises:
Response/Promise Can Be:
•	Fulfilled(.then())
•	Ongoing
•	Reject(.catch())
// Only 10%, we create promises and 90%, we consume promises.
// Promise creation  ~(will be)~  Advanced JS.
Syntax:
Fetch(“filepath/URL”)
.then === to get data 
.catch == To Get Errors
Example:
const jokes = document.getElementById("joke");
const NextBTN = document.getElementById("mybtn");
const set= {
    headers : {
        Accept : "application/json"
    }
}
function runJokes() {
    // $ curl -H "Accept: text/plain" 
    fetch("https://icanhazdadjoke.com/",set).then((joke) => joke.json()).then((data)=> jokes.innerHTML = data.joke).catch((err)=> console.log(err))};
NextBTN.addEventListener("click",runJokes);
runJokes();


 With The Help Of Async Await:
In Async Await Method, we have to write await keyword before writing fetch instructions inside async function.
Syntax:
Async function{
Try{
// Await before fetch method
}catch(error){
}
}
Example:
const jokes = document.getElementById("joke");
const NextBTN = document.getElementById("mybtn");
const runJokes = async () =>{
try {
  const set = {
    headers: {
     Accept: "application/json"
     }
  };
  const response = await fetch("https://icanhazdadjoke.com/",set);
  const data = await response.json();
  jokes.innerHTML = data.joke;
} catch (error) {
  console.log(error);
}
}
NextBTN.addEventListener("click",runJokes);
runJokes();







### LocalStorage :

localStorage.setItem(“key”,value(string)):




