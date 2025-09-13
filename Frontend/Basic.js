//Print Statements
console.log("Hello World");

// Premitive Data types in JS
//Number
Number=10;
//String
String="Hello";
//Boolean
Boolean=true;
//BigInt
BigInt=1234567890123456789012345678901234567890;
//Undefined
undefined;
console.log(undefined);
//Null
Null=null;
//Symbol
s=Symbol(('unique'));
console.log(s)

/*Non-Premitive Data types in JS
  1.Object---Represent the key value pair

  2.Array--- Represent the list of items

  3.Functions-- Represent the usable code
*/


  //Object
  let obj={
    Name:"Sreekanth",
    Age:20
  };
  console.log

  //Array
  let arrr=[1,2,3,4,5];
  console.log(arrr);

  //Function
    function add(a,b){
        return a+b;
    }

    console.log(add(2,3));
    
//Type of operator
console.log(typeof(String));
console.log(typeof(Number));
console.log(typeof(Boolean));
console.log(typeof(BigInt));
console.log(typeof(undefined));
console.log(typeof(Null));
console.log(typeof(Symbol));
console.log(typeof(obj));
console.log(typeof(arrr));
console.log(typeof(add));

//Dynamic Typing
let x=10;
console.log(x);
x="Sreekanth";
console.log(x);
x=true;
console.log(x);
x={Name:"Sreekanth",Age:20};
console.log(x);
x=[1,2,3,4,5];
console.log(x);
x=function(){
    return "Hello";
}
console.log(x());
console.log(x());

//JS is case sensitive
let name="Sreekanth";
//let Name="Kumar"; //This will give error because JS is case sensitive
console.log(name);
//console.log(Name); //This will give error because JS is case sensitive

//Variable Declaration
//1.Var
var a=10;
console.log(a);
a=20;
console.log(a); //Var can be re-declared and updated

//2.Let
let b=10;
console.log(b);
b=20;
console.log(b); //Let can be updated but cannot be re-declared
//let b=30; //This will give error because let cannot be re-declared

//3.Const
const c=10;
console.log(c);
//=20; //This will give error because const cannot be updated
//const c=30; //This will give error because const cannot be re-declared

//If we declare an object or array using const we can update the values but cannot re-declare the object or array
const obj1={
    Name:"Sreekanth",
    Age:20
};
console.log(obj1);
obj1.Name="Kumar";
console.log(obj1);
//const obj1={Name:"Kumar",Age:21}; //This will give error because const cannot be re-declared

const arr1=[1,2,3,4,5];
console.log(arr1);
arr1.push(6);
console.log(arr1);
//const arr1=[1,2,3,4,5,6]; //This will give error because const cannot be re-declared

//JS is a synchronous and single threaded language
console.log("1");
console.log("2");
console.log("3");



