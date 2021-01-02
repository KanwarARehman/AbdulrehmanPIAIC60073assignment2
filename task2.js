var a = Number(prompt("marks1"));
var b = Number(prompt("marks2"));
var c = Number(prompt("marks3"));
var d = Number(prompt("total marks"));
var e= a+b+c;
var f = (e/d)*100; 
if(f >= 80 && f <=100)
{
   alert("Grade is A-One, Excellent")
}
else if(f >= 70 && f <80 ) 
{
    alert("Grade is A, Good")
}
else if(f >=60 && f<70)
{
    alert("Grade is B, You need to improve")
}
else if (f<60 )
{
   alert("Fail, Sorry")
}