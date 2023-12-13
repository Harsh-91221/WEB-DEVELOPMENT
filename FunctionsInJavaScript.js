//Function Statement aka Function Declaration
function a()
{
    console.log("Hello");
}
a();
//Function Expression
var a=function ()
{
    return a;
}
console.log(a());
//Anonymous Function
var a=function ()
{
    console.log("Bye");
}
a();
//Named Function
var a=function xyz()
{
    console.log(a);
}
a();
//Arguments and Parameters
var b=function(para1,para2) // Parameters
{
    console.log(para1,para2); 
}
b(1,2);  //Arguments
//First class Functions aka First class citizens
var b=function(para1)
{
    console.log(para1);
}
function xyz()
{

}
b(xyz); //We put the entire xyz function inside b
