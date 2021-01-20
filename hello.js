console.log(9);
var MyName="John";
console.log(MyName);

var price=12;
console.log(typeof price);

var isHot=true;
console.log(isHot);
//var ekbar likey onek variable declear hoy,same to same variable name 3ta holey last er ta print kore
 var name1= "fahi";
 name2= "tas";
 name3= "mak";

 console.log(name2);

 //toLowerCase function
 var nameTOLower="FAHIMA is MY nAme";
 var makeLower= nameTOLower.toLowerCase("FAHIMA")
 console.log(makeLower);

//toUpperCase
var Upper="fahima is my Name .MY ID is someTHINg";
console.log(Upper.toUpperCase(Upper));
//indexOf
var promise="fahima is my Name .MY ID is someTHINg";
console.log(promise.indexOf('ID'));
//split ()
var two="fahima is my Name .MY ID is someTHINg";
console.log(two.split(' '));
//convert string in number
var number1=5;
var nub2='5';
nub2=parseFloat(nub2);
console.log(nub2+number1);
//float number limit
var n1=4.9800;
var n2=8.9599;
var sum=n1+n2;
var total=sum.toFixed(4);
console.log(total);
//white space
var name1='syeda';
var name2='fahima';
var add=name1+' '+name2;
console.log(add);

//++
var n1=10;
n1++;
console.log(n1);
// Math absolute round floor ceil random
var n=2.500;
var result=Math.ceil(n);
// var result=Math.round(n);
// var result=Math.floor(n);
// var result=Math.abs(n); negative <>positive

console.log(result);
// Make conditional decision, if-else, comparison
var mango=10;
if(mango <=10)
{
    console.log("i will buy it");
}else{
    console.log("not buying this");
}

//Multiple conditions, fulfill both conditions, else if
var p1=false;
var p2=60;
if(p1==true && p2==60)
{
    console.log("mine");
}else if(p1==false && p2 >=50)
{
    console.log("get this right");
}else{
    console.log("nothing");
}
//current date
var date=new Date();
//var date=new Date(1971-12-16);
console.log(date);
//arrayy
var friendsAge = [15, 16, 19, 20];
friendsAge[1] = 21;
var position= friendsAge.indexOf(21);
console.log(position);
//Array advanced, push, pop, array length
var friendsId = [19, 49, 24, 40, 16];
console.log(friendsId.length);
console.log(friendsId);
friendsId.push(20);
friendsId.push(21);
friendsId.push(22);
console.log(friendsId);
friendsId.pop(22);
console.log(friendsId);
friendsId.push(21);
console.log(friendsId);
friendsId.unshift(33); //add element at beggining
console.log(friendsId);
friendsId.shift(33); //delete element at beggining
console.log(friendsId);
//slice
var ForSlice=friendsId.slice(1,5);// start from 1 index and take 4 element
console.log(ForSlice);

//while loop
var num=15;
while(num<=20)
{
    console.log(num);
    num++;
}


console.log("   ");

//for loop
var number=[12, 33, 42, 78, 98,76];
for(var i=0;i<number.length;i++){

    var result=number[i];
    
    console.log(result);
}

console.log("   ");
//for loop array sum
var number=[12, 33, 42, 78, 98,76];
var sum=0;
for(var i=0;i<number.length;i++){
    var sum=sum+number[i];
}
console.log(sum);

//switch
var num=5;
switch(num){
    case 10:
        console.log("I m 10");
        break;
    case 200:
        console.log("I m 200");
        break;
    case 5:
        console.log("I m 5");
        break;
    default:
        console.log("I m default");
        
}
//function
function callMe()
{
    console.log('hellow');
    console.log("how are you");
}

callMe();

function ForFunction(n1,n2)
{
    var result=n1+n2;
    return result;
}

var sum = ForFunction(5,8);
console.log(sum);

function doubleIt(num)
{       
     var num=num*2;
     return num;
}
var a=doubleIt(3);
var b=doubleIt(4);
var total =a+b;
console.log(a,b,total);

//object declare
var std1={
    id:33,
    name:'fahi',
    sec:'A',
    batch:'38th'
}
var std_id=std1.id;
var std_name=std1['name'];
console.log(std_id);
console.log(std_name);

//update object element
std1.name="jannath";
console.log(std1);
//add element
std1.dept="CSE";
console.log(std1);
console.log("  ");
//inchToFeet
var inch;
function inchToFeet(inch)
{

    var feet=inch/12;
    return feet;
}
var numbers=[145, 654, 254, 332,896];

var sd1=inchToFeet(numbers[0]);
var sd2=inchToFeet(numbers[3]);
console.log(sd1,sd2);

//example of var reassign
var name1="fahi";
if(name1.length<6)
{
    name1="jannath";
    console.log(name1);
    
}
//const variable
//(if u have not reassign any variable value,then use const ),
//let is reassignable(use in es6)

//leap  yr
var year;
function leapYear(year)
{
    
    if(year%4==0 && year%100!=0){
        return true;
    }else{
        return false;
    }

}
var call=leapYear(2004);
console.log(call);

console.log("   ");

//factorial with function + for loop

var factorial=1;

function functionFactorial(num)
{
for(i=1;i<=num;i++)
{
   factorial=factorial*i;
}
 return factorial;
}
var result=functionFactorial(2);
console.log(factorial);

//factorial while loop
var factorial=1;

function functionFactorial(num)
{   var i=1;
    while(i<=num)
    {
         factorial=factorial*i;
         i++;
    }
        return factorial;
}
var result=functionFactorial(4);
console.log(factorial);

//recursive factorial function

function functionFactorial(n)
{
    if(n==0)
    {
        return 1;
    }else{

      return n * functionFactorial(n-1);
       
    }
}

var result=functionFactorial(3);
console.log(result);