//What is callback function in JS?
setTimeout(function()
{
    console.log("time");
},5000);
function x(y)
{
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});
//Javascript is a synchronous and single-threaded language

//Blocking the main thread

//Power of callbacks

//Deep about event listener

//Closure demo with event listener

//Scope demo with event listener

//Garbage collection and removeEventListener
