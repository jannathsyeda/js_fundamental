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


