//Factorial Problem
function Factorial(n)
{
    if(n===0 || n===1)
    {
        return 1;
    }
    return n*Factorial(n-1);
}
A=5;
Sum=Factorial(A);
console.log(Sum);


//Calculator Example
function Calculator(a,b,operator)
{
    switch(operator)
    {
        case '+':
            console.log("Addition:",a+b);
            break;
        case '-':
            console.log("Subtraction:",a-b);
            break;
        case '*':
            console.log("Mutiplication:",a*b);
            break;
        case '/':
            console.log("Division:",a/b);
            break;
        default:        
    }

}
Calculator(10,20,'+');

//Compound Interest
function compound_interset(Principle,rate,time,n)
{
    amount=Principle*Math.pow((1+rate/n),n*time);
    return amount;
}
 CI=compound_interset(1000,0.5,2,4);
 console.log("Compound Interset:",amount);

 //Grade of a Student
    function Grade(marks)
    {
        if(marks>=90)
        {
            console.log("A Grade");
        }
        else if(marks>=80 && marks<90)
        {
            console.log("B Grade");
        }
        else if(marks>=70 && marks<80)
        {
            console.log("C Grade");
        }
        else if(marks>=60 && marks<70)
        {
            console.log("D Grade");
        }
        else if(marks>=40 && marks<60)
        {
            console.log("E Grade");
        }
        else
        {
            console.log("F Grade");
        }
    }
    Grade(85);

    //A person is travelling for A to B at a Speed of 30 km/h and the speed will be double for every ten minutes.Calculate the distance if the maximum of the person is 120 and he travelled 96 minutes


function Travelling_Distance() {
    let speed = 30;
    let total_distance = 0;

    
    total_distance += speed*(10 / 60);

    
    speed *= 2;
    if (speed > 120) speed = 120;
    total_distance +=speed * (10 / 60);

    
    speed *= 2;
    if (speed > 120) speed = 120;
    total_distance += speed * (10 / 60);

    
    speed *= 2;
    if (speed > 120) speed = 120;
    total_distance += speed * (66/ 60);

    console.log("Total Distance Travelled = " + total_distance + " km");
}

Travelling_Distance();

let speed=30;
let total_distance=0;
for(let i=10;i<90;i+=10)
{
    total_distance=total_distance+speed/6;
    if(speed<120)
    {
        speed=speed*2;
    }   

}
total_distance=total_distance+speed/10;
console.log("Total Distance Travelled:",total_distance);

//Auto basic pay for auto is 30rs for 4km for the next 5km the price is 10 .
//for the next 10km the price is 15
//if the kms are more the price will be 20
//person travelled 19.5km what will be the price
function Auto_Rickshaw_Fare(distance) {
    let charge = 30; 
    if (distance > 4 && distance <= 9) {
        charge+= 10; 
    } else if (distance > 9 && distance <= 19) {
        charge += 10; 
        charge += 15; 
    } else if (distance > 19) {
        charge += 10; 
        charge += 15; 
        charge += 20; 
    }

    return charge;
}
let pri = Auto_Rickshaw_Fare(19.5);
console.log("Auto Rickshaw Fare:", pri); 

//Auto basic pay for auto is 30rs for 4km for the next 5km the price is 10 per km.
//for the next 10km the price is 15per km
//if the kms are more the price will be 20per km
//person travelled 19.5km what will be the price
function AutoFare(distance) {
    let charge = 30; 
    if (distance > 4 && distance <= 9) {
        charge += (distance - 4) * 10; 
    } else if (distance > 9 && distance <= 19) {
        charge += 5 * 10 + (distance - 9) * 15;     
    } else if (distance > 19) {
        charge += 5 * 10 + 10 * 15 + (distance - 19) * 20;; 
    }
    return charge;
}
let price = AutoFare(19.5);
console.log("Auto Rickshaw Fare:", price);


//5 Table using while loop
let i=1;
console.log("5 Table");
while(i<=10)
{
    console.log(5 + "X" + i + "=" +i *5);
    i++;
}

//Do while loop
let j=1;
console.log("5 Table using do while loop");
do
{
    console.log(5 + "X" + j + "=" +j *5);
    j++;
}while(j<=10);

//Print 1 to 10 using for loop
console.log("1 to 10 using for loop");
for(let k=1;k<=10;k++)
{
    console.log(k);
}


//dom maipulations - are the process of changing the html elements using javascript
//document.getElementById("id")
//document.getElementsByClassName("class")
//document.getElementsByTagName("tagname")
//document.querySelector("css selector")
//document.querySelectorAll("css selector")
//myDiv.addEventListener('click',()=>{
 //   alert('Div Clicked');
 //})



 //Ajax - Asynchronous JavaScript and XML
 //it is a technique to send and receive data from server without refreshing the page
 //it is used to create dynamic web pages
 //it is used to create single page applications
 //it is used to create real time applications

 //json - JavaScript Object Notation
    //it is a lightweight data interchange format
    //it is easy to read and write
    //it is easy to parse and generate
    //it is language independent
    //it is used to store and exchange data between server and client

//